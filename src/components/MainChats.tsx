import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const Title = styled.div`
      color: red;
    `;

const Contatiner = styled.div`
      position: relative;
      width:1240px;
      height:300px;

      @media (min-width: 768px) {
        width: 400px;
      }

      @media (min-width: 992px) {
        width: 970px;
      }

      //@media (min-width: 1200px) {
      //  width: 1170px;
      //}
    `;



const MainChats = () => {
    let data: any = {
      labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20'],
      datasets: [
        {
          type: 'line',
          label: '탑승인원',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [
            { x: 'January', y: 1 },
            { x: 'February', y: 2 },
            { x: 'March', y: 3 },
            { x: 'April', y: 4 },
            { x: 'May', y: 5 },
          ],
          borderColor: 'red',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: '하차인원',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [
            { x: 'January', y: 1 },
            { x: 'February', y: 2 },
            { x: 'March', y: 3 },
            { x: 'April', y: 4 },
            { x: 'May', y: 5 },
            { x: 'June', y: 6 },
          ],
        },
      ],
    };


    const options = {
      // 옵션 (1)
      responsive: true, // 크기조정
      maintainAspectRatio: false,  // 가로 세로 종횡비 유지
      // 옵션 (2)
      interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      // 옵션 (3)
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: '#E3E3E3',
          },
        },
      },
    };

    return (
      <div>
        <Title>라인 그래프</Title>
        <Contatiner>
          {/*<Line options={options} data={data} width='500vw' height='300vh' />*/}
          <Line options={options} data={data} />
        </Contatiner>
      </div>
    );
  }
;
export default MainChats;
