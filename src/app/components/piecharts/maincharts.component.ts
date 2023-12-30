import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { EChartsOption } from 'echarts';
import { ViewEncapsulation } from '@angular/core';
import { AQIChartService, AQIData } from './lines';

@Component({
  selector: 'app-maincharts',
  templateUrl: './maincharts.component.html',
  styleUrls: ['./maincharts.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class MainchartsComponent implements OnInit {

  chartOptions: EChartsOption;
  aqiData: AQIData[]; 

  constructor(private optionsService: OptionsService, private aqiChartService: AQIChartService) {}
  
  optionsPie:any;
  options: EChartsOption;
  theme;

  ngOnInit() {
    this.optionsService.setTheme(this.theme);
    this.options = this.optionsService.getOptions();

    const chartData = this.optionsService.generateChartData();
    this.optionsPie = this.optionsService.getChartOptions(chartData);

    this.aqiChartService.getAQIData().subscribe((data) => {
      this.aqiData = data;
      this.chartOptions = this.aqiChartService.getChartOptions(data);
    });
  }
}
