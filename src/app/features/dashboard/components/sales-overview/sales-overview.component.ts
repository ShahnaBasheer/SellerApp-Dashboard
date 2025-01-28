import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartOptions,
} from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import { CurrencyPipe } from '@angular/common';
import { CardHeaderWrapperComponent } from '../../../../shared/components/card-header-wrapper/card-header-wrapper.component';

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [CurrencyPipe, CardHeaderWrapperComponent, BaseChartDirective],
  templateUrl: './sales-overview.component.html',
  styleUrl: './sales-overview.component.css',
})

export class SalesOverviewComponent implements OnInit {
  @ViewChild('salesOverviewChart') canvasRef!: ElementRef<HTMLCanvasElement>;
  private salesOverviewChart!: Chart;

  revenue = [
    15000, 16000, 17000, 15500, 16500, 14000, 13500, 15780, 16800, 17200,
  ];
  target = [
    10000, 15000, 16500, 23000, 17000, 10500, 20200, 15000, 16000, 17500,
  ];
  totalRevenue = 0;
  totalTarget = 0;

  // Chart Configuration
  public lineChartData = {
    labels: [
      'Apr 2023',
      'May 2023',
      'Jun 2023',
      'Jul 2023',
      'Aug 2023',
      'Sep 2023',
      'Oct 2023',
      'Nov 2023',
      'Dec 2023',
      'Jan 2024',
    ],
    datasets: [
      {
        label: 'Total Revenue',
        data: this.revenue,
        borderColor: '#696FFB',
        backgroundColor: 'rgba(105, 111, 251, 0.12)', // Transparent fill color
        fill: false,
        pointRadius: 0,
        tension: 0.4, // Makes lines curvy
      },
      {
        label: 'Total Target',
        data: this.target,
        borderColor: '#FF9E2B',
        backgroundColor: '#FF9E2B0A', // Transparent fill color
        fill: false,
        pointRadius: 0,
        tension: 0.4, // Curvy lines
      },
    ],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    } as any,
    interaction: {
      mode: 'index', // Ensures the tooltip and line follow the cursor
      intersect: false, // Tooltip appears even if not exactly on the point
    },

    scales: {
      x: {
        grid: {
          display: false, // Display grid lines for X-axis
        } as any,
      } as any,
      y: {
        beginAtZero: true,
        position: 'right',
        border: {
          display: true,
          dash: [2, 2],
        } as any,
        ticks: {
          stepSize: 10000,
          callback: (value: any) => `$${value / 1000}k`, // Format Y-axis labels
          padding: 10,
        },
        grid: {
          display: true,
          color: '#00000029'
        } as any,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: 'index',
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw as number;
            if (tooltipItem.dataset.label === 'Total Revenue') {
              const value = tooltipItem.raw as number;
              return `Revenue: $${value.toLocaleString()}`;
            } else if (tooltipItem.dataset.label === 'Total Target') {
              const value = tooltipItem.raw as number;
              return `Target: ${value.toLocaleString()}`;
            }
            return '';
          },
        },
      },
    },

  } as any;

  // Define custom plugin for alternating X-axis background
  private alternatingXBackgroundPlugin = {
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
  };

  ngOnInit(): void {
    this.totalRevenue = this.revenue.reduce((acc, curr) => acc + curr, 0);
    this.totalTarget = this.target.reduce((acc, curr) => acc + curr, 0);
  }

  ngAfterViewInit(): void {
    const ctx = this.canvasRef.nativeElement;

    // if (this.salesOverviewChart) {
    //   this.salesOverviewChart.destroy(); // Destroy the existing chart
    // }
    if (ctx) {
      this.salesOverviewChart = new Chart(ctx, {
        type: 'line',
        data: this.lineChartData,
        options: this.lineChartOptions,
        plugins: [
          this.alternatingXBackgroundPlugin,
          { id: 'crosshair',
            ...CrosshairPlugin,
            crosshair: {
              enabled: true,
              line: {
                color: 'black', // Ensure the line is black
                width: 1,
                dashPattern: [2, 2], // Ensure dotted line
              },
              tooltip: {
                enabled: true
              }
            },
           } as any
        ],
      });
    }
  }


}
