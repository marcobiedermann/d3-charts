/* eslint-disable import/no-extraneous-dependencies */
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import LineChart from '../react';

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateData(n) {
  const data = [];
  let index = n;

  while (index >= 0) {
    data.push([
      new Date(Date.now() - (index * 1000 * 60 * 60 * 24)),
      generateRandomInteger(0, 12),
    ]);
    index -= 1;
  }

  return data;
}

storiesOf('Line Chart', module)
  .addDecorator(withInfo)
  .add('default', () => (
    <LineChart data={generateData(12)} />
  ));
