import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  
    generateChartData(): { date: string[]; data: number[] } {
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date = [];
        let data = [Math.random() * 300];
    
        for (let i = 1; i < 20000; i++) {
          var now = new Date((base += oneDay));
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
          data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
    
        return { date, data };
      }
    
      getChartOptions(chartData: { date: string[]; data: number[] }): any {
        return {
          tooltip: {
            trigger: 'axis',
            position: function (pt: number[]) {
              return [pt[0], '10%'];
            },
          },
          title: {
            left: 'center',
            text: 'Sales Per Year',
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              restore: {},
              saveAsImage: {},
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: chartData.date,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 10,
            },
            {
              start: 0,
              end: 10,
            },
          ],
          series: [
            {
              name: 'Fake Data',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 158, 68)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 131)',
                  },
                ]),
              },
              data: chartData.data,
            },
          ],
          
        };
        
      }


      
  optionsPie: EChartsOption = {
        
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
       
        calculable: true,
        series: [
          {
            name: 'area',
            type: 'pie',
            radius: [30, 110],
            roseType: 'area',
            data: [
              { value: 10, name: 'Pizza' },
              { value: 5, name: 'Burger' },
              { value: 15, name: 'Salad' },
              { value: 25, name: 'Pasta' },
              { value: 20, name: 'Sushi' },
              { value: 35, name: 'Steak' },
              { value: 30, name: 'Ice Cream' },
              { value: 40, name: 'Coffee' },
            ],
          },
        ],
  };

  theme:ThemeOption;
  setOptions(newOptions: EChartsOption) {
    this.optionsPie = newOptions;
  }

  setTheme(newThemes:ThemeOption){
    this.theme = newThemes;
  }

  getOptions() {
    return this.optionsPie;
  }

  getThemes(){
    return this.theme
  }
}