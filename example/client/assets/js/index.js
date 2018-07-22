import D3LineChart from '../../../../index';
import generateData from './generate-data';

const d3LineChart = new D3LineChart('.js-d3-line-chart');
const data = generateData(12);

d3LineChart.render(data);
