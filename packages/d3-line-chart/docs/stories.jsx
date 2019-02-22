/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import D3LineChart from '..';

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateData(n) {
  const data = [];

  while (n--) {
    data.push([
      new Date(Date.now() - (n * 1000 * 60 * 60 * 24)),
      generateRandomInteger(0, 12),
    ]);
  }

  return data;
}

class LineChart extends Component {
  componentDidMount() {
    this.chart = new D3LineChart(this.refs.chart);

    this.chart.render(generateData(12));
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

storiesOf('Line Chart', module)
  .addDecorator(withInfo)
  .add('default', () => (
    <LineChart />
  ));
