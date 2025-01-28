import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartOptions } from 'chart.js';
import { Component } from '@angular/core';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import { CurrencyPipe } from '@angular/common';
import { CardHeaderWrapperComponent } from "../../../../shared/components/card-header-wrapper/card-header-wrapper.component";



@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [BaseChartDirective, CurrencyPipe, CardHeaderWrapperComponent],
  templateUrl: './sales-overview.component.html',
  styleUrl: './sales-overview.component.css'
})

export class SalesOverviewComponent {
  revenue = [15000, 16000, 17000, 15500, 16500, 14000, 13500, 15780, 16800, 17200];
  target = [10000, 15000, 16500, 23000, 17000, 10500, 20200, 15000, 16000, 17500];
  totalRevenue = 0;
  totalTarget = 0

  ngOnInit(): void {
      this.totalRevenue = this.revenue.reduce((acc, curr) => acc + curr, 0);
      this.totalTarget = this.target.reduce((acc, curr) => acc + curr, 0);
  }

  // Chart Configuration
  public lineChartData = {
    labels: [
      'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023',
      'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'
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
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding:10,
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
          dash: [2,2],
        } as any,
        ticks: {
          stepSize: 10000,
          callback: (value: any) => `$${value / 1000}k`, // Format Y-axis labels
          padding: 10,
        },
        grid: {
          display: true,
          color: (context:any) => context.tick.value === 0 ? '#00000029' : '#ddd', // Grid color
          drawTicks: false,
        } as any,


      }
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
          }
        }
      },
      crosshair: {
        line: {
          color: 'black', // Dotted line color
          width: 1,
          dashPattern: [5, 5], // Dotted pattern
        },

     },
  } as any


  constructor() {
    // Register custom plugin for alternating X-axis grid background
    Chart.register(CrosshairPlugin,
    {
      id: 'alternatingXBackground',
      beforeDraw: (chart: any) => {
        const { ctx, chartArea, scales } = chart;
        const xScale = scales['x']; // Get the X-axis scale

        // Get the ticks using getTicks()
        const ticks = xScale.getTicks();

        ctx.save();
        for (let i = 0; i < ticks.length - 1; i++) {
          // Get the X-axis pixel values based on the numeric values of the ticks
          const startX = xScale.getPixelForValue(i);
          const endX = xScale.getPixelForValue(i+1);

          ctx.fillStyle = i % 2 === 0 ? '#696FFB1F' : '#696FFB0A';

          // Draw the background for each segment between X-axis ticks
          ctx.fillRect(
            startX, // X position of the segment
            chartArea.top, // Top position of the chart
            endX - startX, // Width of the segment
            chartArea.bottom - chartArea.top // Height of the chart
          );
        }
        ctx.restore();
      },
    },);
  }
}



