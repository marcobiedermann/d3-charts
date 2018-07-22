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
      axis: {
        padding: 5,
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
      axis,
    } = this;
    const [innerWidth, innerHeight] = this.dimensions();

    this.svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    this.scaleX = d3.scaleTime()
      .range([0, innerWidth]);

    this.scaleY = d3.scaleLinear()
      .range([innerHeight, 0]);

    this.xAxis = d3.axisBottom(this.scaleX)
      .ticks(10)
      .tickPadding(8);

    this.yAxis = d3.axisLeft(this.scaleY)
      .ticks(10)
      .tickPadding(8);

    this.line = d3.line()
      .curve(d3.curveBasis)
      .x(data => this.scaleX(new Date(data[0])))
      .y(data => this.scaleY(data[1]));

    this.svg.append('path')
      .attr('class', 'd3-line-chart__line');

    if (axis) {
      this.svg.append('g')
        .attr('class', 'd3-line-chart__axis d3-line-chart__axis--x')
        .attr('transform', `translate(0, ${innerHeight + axis.padding})`)
        .call(this.xAxis);

      this.svg.append('g')
        .attr('class', 'd3-line-chart__axis d3-line-chart__axis--y')
        .attr('transform', `translate(${-axis.padding}, 0)`)
        .call(this.yAxis);
    }
  }

  renderAxis() {
    const {
      svg,
      xAxis,
      yAxis,
    } = this;

    svg.select('.d3-line-chart__axis--x')
      .call(xAxis);

    svg.select('.d3-line-chart__axis--y')
      .call(yAxis);
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
    const {
      axis,
    } = this;

    this.scaleX.domain(d3.extent(data, data => new Date(data[0])));
    this.scaleY.domain(d3.extent(data, data => data[1]));

    if (axis) {
      this.renderAxis();
    }

    this.renderLine(data);
  }

  update() {
    this.render();
  }
}

export default D3LineChart;
