# D3 Line Chart

[![dependencies Status](https://david-dm.org/marcobiedermann/d3-charts/status.svg?path=packages/d3-line-chart)](https://david-dm.org/marcobiedermann/d3-charts?path=packages/d3-line-chart)

## Install

Install package using `npm`

```bash
npm install @marcobiedermann/d3-line-chart --save
```

## Usage

Import constructor and initialize new instance:

```js
import D3LineChart from '@marcobiedermann/d3-line-chart';

const d3LineChart = new D3LineChart(element, options);
```

Render chart using `render()` and pass data array to it:

```js
d3LineChart.render(data);
```

Update chart using `update()` and pass new data array to it:

```js
d3LineChart.update(newData);
```
