import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import D3LineChart from '..';

const LineChart = (props) => {
  const { data, width, height } = props;
  const chart = useRef();

  useEffect(() => {
    if (data && chart.current) {
      const d3lineChart = new D3LineChart(chart.current, {
        width,
        height,
      });

      d3lineChart.render(data);
    }
  }, [data, chart.current]);

  return <div ref={chart} />;
};

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
