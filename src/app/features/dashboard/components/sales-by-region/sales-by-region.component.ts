import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Store } from '@ngrx/store';
import { selectSalesByRegion } from '../../store/dashboard.selectors';
import { SalesByRegion } from '../../../../core/models/dashboard.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-by-region',
  imports: [CardHeaderWrapperComponent, BaseChartDirective, CommonModule],
  templateUrl: './sales-by-region.component.html',
  styleUrl: './sales-by-region.component.css',
})
export class SalesByRegionComponent {
  private salesByRegionChart!: Chart;
  private store: Store = inject(Store);

  @ViewChild('salesByRegionChart') canvasRef!: ElementRef<HTMLCanvasElement>;

  isChartLoaded = false;
  private radarChartLabels: string[] = [];
  private salesData: number[] = [];

  ngOnInit(): void {
    this.store.select(selectSalesByRegion).subscribe((data) => {
      if (data) {
        this.radarChartLabels = Object.keys(data as SalesByRegion) ?? [];
        this.salesData = Object.values(data as SalesByRegion) ?? [];
        this.isChartLoaded = true;
        if(this.canvasRef?.nativeElement){
          this.createChart();
        }
      } else {
        this.isChartLoaded = false;
      }
    });
  }


  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart() {
    const ctx = this.canvasRef?.nativeElement;

    if (ctx) {
      this.isChartLoaded = true;

      if (this.salesByRegionChart) {
        this.salesByRegionChart.destroy(); // Destroy any existing chart instance
      }

      this.salesByRegionChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: this.radarChartLabels,
          datasets: [
            {
              label: 'Sales by Region',
              data: this.salesData, // Replace these values with actual sales data
              backgroundColor: '#64A2FF52', // Transparent background color
              borderColor: '#696FFB', // Line color
              borderWidth: 1,
              pointBackgroundColor: '#696FFB', // Point color
              pointBorderColor: '#fff', // Point border color
              pointBorderWidth: 1,
              pointRadius: 3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: {
                color: 'rgba(105, 111, 251, 0.08)', // Angle line color
              },
              grid: {
                color: 'rgba(105, 111, 251, 0.08)', // Grid line color
              },
              pointLabels: {
                color: 'rgba(0, 0, 0, 0.7)', // Labels outside the chart
                font: {
                  size: 13,
                },
              },
              ticks: {
                display: true,
                backdropColor: 'transparent', // No background for ticks
                color: 'transparent',
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem: any) => {
                  const value = tooltipItem.raw;
                  return `${value.toLocaleString()}`;
                },
              },
            },

            crosshair: {
              enabled: false,
            },
          },
        } as any,
        plugins: [
          {
            id: 'radarAlternatingBackground',
            beforeDraw: (chart: any) => {
              const { ctx, scales } = chart;
              const rScale = scales['r']; // Access the radial scale
              const angleStep = (2 * Math.PI) / rScale._pointLabels.length; // Angle between each vertex
              if (!rScale) return;
              ctx.save();

              // Number of radial grid levels
              const steps = rScale.ticks?.length;

              for (let i = 0; i < steps; i++) {
                // Calculate the radius for the current and next level
                const startRadius = rScale.getDistanceFromCenterForValue(
                  rScale.ticks[i].value
                );
                const endRadius =
                  i < steps - 1
                    ? rScale.getDistanceFromCenterForValue(rScale.ticks[i + 1].value)
                    : 0;

                // Alternate colors
                ctx.fillStyle = i % 2 === 0 ? 'rgba(105, 111, 251, 0.07)' : 'rgba(105, 111, 251, 0.10)';

                ctx.beginPath();

                // Draw the polygon for the current grid level
                for (let j = 0; j < rScale._pointLabels.length; j++) {
                  const angle = angleStep * j - Math.PI / 2; // Start from the top
                  const x = rScale.xCenter + Math.cos(angle) * startRadius;
                  const y = rScale.yCenter + Math.sin(angle) * startRadius;

                  if (j === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                }
                ctx.closePath();

                // Fill the area for the current polygon
                ctx.fill();

                if (endRadius > 0) {
                  ctx.beginPath();

                  // Draw the inner polygon (next level) in reverse order to form a closed ring
                  for (let j = rScale._pointLabels.length - 1; j >= 0; j--) {
                    const angle = angleStep * j - Math.PI / 2; // Start from the top
                    const x = rScale.xCenter + Math.cos(angle) * endRadius;
                    const y = rScale.yCenter + Math.sin(angle) * endRadius;

                    ctx.lineTo(x, y);
                  }
                  ctx.closePath();
                  ctx.fill();
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
    if (this.salesByRegionChart) {
      this.salesByRegionChart.destroy();
    }
  }
}
