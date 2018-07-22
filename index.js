import * as d3 from 'd3';

class D3LineChart {
  constructor(element, options) {
    const defaults = {
      height: 370,
      width: 500,
      margin: {
        bottom: 35,
        left: 60,
        right: 0,
        top: 15,
      },
    };

    this.element = element;
    Object.assign(this, defaults, options);

    this.init();
  }

  init() {
    const {
      element, width, height, margin,
    } = this;

    this.svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  }

  render() {

  }

  update() {
    this.render();
  }
}

export default D3LineChart;
