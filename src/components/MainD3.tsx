import React from 'react';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { axisBottom, axisRight, scaleBand, scaleLinear, select } from 'd3';

// interface Props {
//   campaign: {
//     date: string;
//     people: number;
//   }[];
// }

const Title = styled.div`
      color: red;
    `;

// const Contatiner = styled.div`
//       width: 800px;
//       height: 100%;
//     `;

const MainD3 = () => {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);


  // useEffect(() => {
  //   const svg: any = select(svgRef.current);
  //
  //   // scale
  //   const xScale = scaleBand().domain(dayRatesIndex as Iterable<string>).range([0, 280]).padding(0.2);
  //   const yScale = scaleLinear().domain([0, 50]).range([170, 10]);
  //
  //   // axis
  //   const xAxis = axisBottom(xScale)
  //     .ticks(campaign.length)
  //     .tickFormat((_, i) => dates[i]);
  //   svg.select('.x-axis').style('transform', 'translateY(170px)').call(xAxis);
  //
  //   const yAxis = axisRight(yScale).ticks(7);
  //   svg.select('.y-axis').style('transform', 'translateX(280px)').call(yAxis);
  //
  //   svg
  //     .selectAll('.bar')
  //     .data(peopleArr)
  //     .join('rect')
  //     .attr('class', 'bar')
  //     .attr('x', (_: number, i: string) => xScale(i))
  //     .attr('y', yScale)
  //     .attr('width', xScale.bandwidth())
  //     .attr('height', (value: number) => 170 - yScale(value));
  // }, [campaign]);

    return (
      <div>
        <Title>D3 사용법</Title>
          <svg ref={svgRef}></svg>
          <button onClick={() => {setData(data.map(el => el + 5))}}>increase + 5</button>
          <button onClick={() => {setData(data.filter(el => el > 35))}}>filter circle r should gt 35</button>
      </div>
    );
  }
;
export default MainD3;
