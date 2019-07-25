import PropTypes from 'prop-types';
import React, { Component } from 'react';
import D3LineChart from '..';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.chart = React.createRef();
  }

  componentDidMount() {
    const { data, width, height } = this.props;

    this.chart = new D3LineChart(this.chart.current, {
      width,
      height,
    });

    this.chart.render(data);
  }

  render() {
    return <div ref={this.chart} />;
  }
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])),
  width: PropTypes.number,
  height: PropTypes.number,
};

LineChart.defaultProps = {
  data: [],
  width: 500,
  height: 370,
};

export default LineChart;
