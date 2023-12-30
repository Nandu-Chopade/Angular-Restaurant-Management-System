import { Component } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from '../cooltheme';
import { OptionsService } from '../options.service';
import {EChartsOptions} from '../chart-option';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-piecharts',
  templateUrl: './piecharts.component.html',
  styleUrls: ['./piecharts.component.css']
})
export class PiechartsComponent {

  // theme: string | ThemeOption;
  theme;
  coolTheme = CoolTheme;
  options: EChartsOption; 
  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
  this.optionsService.setTheme(this.theme);
  this.options = EChartsOptions
}
  setTheme(selectedTheme: string | ThemeOption): void {
    this.theme = selectedTheme;
  }
  
  
}
