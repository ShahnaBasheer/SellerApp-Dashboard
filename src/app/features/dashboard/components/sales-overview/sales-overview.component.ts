import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';
import { Store } from '@ngrx/store';
import { selectSalesOverview } from '../../store/dashboard.selectors';
import { SalesOverview } from '../../../../core/models/dashboard.modal';

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [CurrencyPipe, CardHeaderWrapperComponent, BaseChartDirective, CommonModule],
  templateUrl: './sales-overview.component.html',
  styleUrl: './sales-overview.component.css',
})

export class SalesOverviewComponent {;
  public salesOverviewChart!: Chart;
  private store: Store = inject(Store);
  isChartLoaded = false;

  @ViewChild('salesOverviewChart') canvasRef!: ElementRef<HTMLCanvasElement>

  revenue: number[] = [];
  target: number[] = [];
  months: string[] = [];

  totalRevenue = 0;
  totalTarget = 0;

  ngOnInit(): void {
    this.store.select(selectSalesOverview).subscribe((data) => {
      if(data){
        this.revenue = data?.map((item: SalesOverview) => +item.revenue) ?? [];
        this.target = data?.map((item: SalesOverview) => +item.target) ?? [];
        this.months = data?.map((item: SalesOverview) => `${item.month} 2024`) ?? [];
        this.totalRevenue = this.revenue.reduce((acc, curr) => acc + curr, 0);
        this.totalTarget = this.target.reduce((acc, curr) => acc + curr, 0);4
        this.isChartLoaded = true;
        if(this.canvasRef?.nativeElement){
          this.createChart();
        }
      } else {
        this.isChartLoaded = false;
      }
    });
  }


  ngAfterViewInit(){
    this.createChart();
  }


  private createChart(): void {
    const ctx = this.canvasRef?.nativeElement;

    if (ctx) {
       this.isChartLoaded = true;

       if(this.salesOverviewChart){
        this.salesOverviewChart.destroy()
       }

      this.salesOverviewChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.months,
          datasets: [
            {
              label: 'Total Revenue',
              data: this.revenue,
              borderColor: '#696FFB',
              backgroundColor: 'rgba(105, 111, 251, 0.12)',
              fill: false,
              pointRadius: 0,
              tension: 0.4,
            },
            {
              label: 'Total Target',
              data: this.target,
              borderColor: '#FF9E2B',
              backgroundColor: '#FF9E2B0A',
              fill: false,
              pointRadius: 0,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              position: 'right',
              border: {
                display: true,
                dash: [2, 2],
              },
              ticks: {
                stepSize: 10000,
                callback: (value: any) => `$${value / 1000}k`,
                padding: 10,
              },
              grid: {
                display: true,
                color: '#00000029',
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              callbacks: {
                label: (tooltipItem: any) => {
                  const value = tooltipItem.raw as number;
                  if (tooltipItem.dataset.label === 'Total Revenue') {
                    return `Revenue: $${value.toLocaleString()}`;
                  } else if (tooltipItem.dataset.label === 'Total Target') {
                    return `Target: ${value.toLocaleString()}`;
                  }
                  return '';
                },
              },
            },
          },
        },
        plugins: [
          { id:'crosshair', ...CrosshairPlugin  },
          {
            id: 'alternatingXBackground',
            beforeDraw: (chart: any) => {
              const { ctx, chartArea, scales } = chart;
              const xScale = scales['x']; // Get the X-axis scale
              ctx.save();

              if (xScale?.ticks?.length >= 0) {
                for (let i = 0; i < xScale?.ticks?.length - 1; i++) {
                  const startX = xScale.getPixelForValue(i);
                  const endX = xScale.getPixelForValue(i + 1);

                  ctx.fillStyle = i % 2 === 0 ? '#696FFB1F' : '#696FFB0A';
                  // Draw the alternating background
                  ctx.fillRect(
                    startX,
                    chartArea.top,
                    endX - startX,
                    chartArea.bottom - chartArea.top
                  );
                }
              }
              ctx.restore();
            },
          }
        ],
      });

    }
  }

  ngOnDestroy(): void {
    if (this.salesOverviewChart) {
      this.salesOverviewChart.destroy();
    }
  }

}
