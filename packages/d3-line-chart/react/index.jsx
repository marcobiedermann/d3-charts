import React, { Component } from 'react';
import D3LineChart from '..';

class LineChart extends Component {
  componentDidMount() {
    const { data } = this.props;

    this.chart = new D3LineChart(this.refs.chart);

    this.chart.render(data);
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

export default LineChart;
