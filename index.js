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

  dimensions() {
    const {
      margin,
      width,
      height,
    } = this;

    return [
      width - margin.left - margin.right,
      height - margin.top - margin.bottom,
    ];
  }

  init() {
    const {
      element,
      width,
      height,
      margin,
    } = this;
    const [innerWidth, innerHeight] = this.dimensions();

    this.svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    this.svg.append('path')
      .attr('class', 'd3-line-chart__line');

    this.scaleX = d3.scaleTime()
      .range([0, innerWidth]);

    this.scaleY = d3.scaleLinear()
      .range([innerHeight, 0]);

    this.line = d3.line()
      .curve(d3.curveBasis)
      .x(data => this.scaleX(data.date))
      .y(data => this.scaleY(data.value));
  }

  renderAxis() {

  }

  renderLine(data) {
    const {
      svg,
      line,
    } = this;

    svg.select('.d3-line-chart__line')
      .data([data])
      .transition()
      .attr('d', line);
  }

  render(data) {
    this.scaleX.domain(d3.extent(data, data => data.date));
    this.scaleY.domain(d3.extent(data, data => data.value));

    this.renderAxis();
    this.renderLine(data);
  }

  update() {
    this.render();
  }
}

export default D3LineChart;
