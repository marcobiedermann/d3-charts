import React, { FC, useEffect, useRef } from 'react';
import D3LineChart from '..';

type Data = [Date, number];

export interface LineChartProps {
  axis?: {
    padding: number;
  };
  data: Data[];
  height?: number;
  margin?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  width?: number;
}

const LineChart: FC<LineChartProps> = (props) => {
  const { data, ...otherProps } = props;
  const chart = useRef();

  useEffect(() => {
    if (data && chart.current) {
      const d3lineChart = new D3LineChart(chart.current, otherProps);

      d3lineChart.render(data);
    }
  }, [data, chart.current]);

  return <div ref={chart} />;
};

export default LineChart;
