import { Meta, Story } from '@storybook/react';
import React from 'react';
import LineChart, { LineChartProps } from '../react';

function randomInteger(min: number, max = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DAY_IN_MS = 1000 * 60 * 60 * 24;

type Data = [Date, number];

function generateData(n: number): Data[] {
  return Array.from({ length: n }, (_, index) => [new Date(Date.now() - index * DAY_IN_MS), randomInteger(0, 12)]);
}

export default {
  title: 'Line Chart',
  component: LineChart,
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} data={generateData(12)} />;

export const Default = Template.bind({});

Default.args = {
  height: 400,
  width: 900,
};
