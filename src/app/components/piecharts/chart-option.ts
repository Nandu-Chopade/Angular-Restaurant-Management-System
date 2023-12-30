import { EChartsOption } from "echarts";

export const EChartsOptions: EChartsOption = {
    title: {
      left: '50%',
      text: 'Sale in a day',
      subtext: 'Food',
      textAlign: 'center',
      top: '5%',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['Pizza', 'Burger', 'Salad', 'Pasta', 'Sushi', 'Steak', 'Ice Cream', 'Coffee'],
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
  