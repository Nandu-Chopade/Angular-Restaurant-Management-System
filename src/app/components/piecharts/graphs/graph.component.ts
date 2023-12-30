import { Component } from '@angular/core';
import { OptionsService } from '../options.service';
import { ThemeOption } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CoolTheme } from '../cooltheme';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  theme;
  coolTheme = CoolTheme;
  options: EChartsOption; 

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
  this.optionsService.setTheme(this.theme);
    const chartData = this.optionsService.generateChartData();
    this.options = this.optionsService.getChartOptions(chartData);

}
  setTheme(selectedTheme: string | ThemeOption): void {
    this.theme = selectedTheme;
  }

  setRandom():void{
    const chartData = this.optionsService.generateChartData();
    this.options = this.optionsService.getChartOptions(chartData);
  }

  setDecal():void{
    flag:Boolean;
    
  }
}
