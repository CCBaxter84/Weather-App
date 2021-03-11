import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Container, Title } from '../sharedStyles.js';
import { getWeatherCategory, dateTimePrettier } from '../helpers.js';

function ChartView({ data, city }) {
  const labels = useMemo(() => {
    const uglyLabels = getWeatherCategory('dateTime', data);
    const prettyLabels = uglyLabels.map(entry => dateTimePrettier(entry));
    return prettyLabels;
  }, [data]);
  const temperature = useMemo(() => getWeatherCategory('temperature', data), [data]);
  const feelsLike = useMemo(() => getWeatherCategory('feelsLike', data), [data]);
  const humidity = useMemo(() => getWeatherCategory('humidity', data), [data]);
  const windSpeed = useMemo(() => getWeatherCategory('windSpeed', data), [data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature in F',
        data: temperature,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
      {
        label: 'Feels Like in F',
        data: feelsLike,
        fill: false,
        backgroundColor: 'rgb(132, 99, 255)',
        borderColor: 'rgba(132, 99, 255, 0.2)'
      },
      {
        label: 'Humidity %',
        data: humidity,
        fill: false,
        backgroundColor: 'rgb(60, 179, 113)',
        borderColor: 'rgba(60, 179, 113, 0.2)'
      },
      {
        label: 'Wind Speed in mph',
        data: windSpeed,
        fill: false,
        backgroundColor: 'rgb(50, 132, 255)',
        borderColor: 'rgba(50, 132, 255, 0.2)'
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  }

  return (
    <Container>
      <Title>
        <h2>{city} Weather</h2>
      </Title>
      <Line
        data={chartData}
        width={100}
        height={50}
        options={options}
      />
    </Container>
  );
}

ChartView.propTypes = {
  data: PropTypes.array,
  city: PropTypes.string
}

export default ChartView;