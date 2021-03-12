import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dateTimePrettier, formatCityForUI } from '../helpers.js';
import { Para } from '../sharedStyles.js';

const DescriptorsSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px 10px 20px 10px;
`;

const Blurb = styled.article`
  align-items: stretch;
  background-color: lightsteelblue;
  border-radius: 8px;
  color: midnightblue;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Shippori Mincho B1', serif;
  justify-content: center;
  margin: 10px;
  max-width: 150px;
  padding: 5px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

function Descriptors({ data, currentLocation }) {
  // Render nothing if no data
  if (data.length === 0) {
    return (
      <></>
    );
  }

  // Format data received from props to look pretty
  const lastIndex = data.length - 1;
  const { temperature, city, windSpeed, humidity, feelsLike, dateTime } = data[lastIndex];
  const formattedCity = formatCityForUI(city);
  const prettyDT = dateTimePrettier(dateTime);
  const prettyDate = prettyDT.split(' ')[0];
  const prettyTime = prettyDT.split(' ').slice(1).join(' ');

  return (
    <DescriptorsSection>
      <Blurb>
        <Title>Latest Data</Title>
        <Para>City:  {formattedCity}</Para>
        <Para>Temperature:  {temperature}&#176;F</Para>
        <Para>Feels Like:  {feelsLike}&#176;F</Para>
        <Para>Humidity:  {humidity}%</Para>
        <Para>Wind Speed: {windSpeed}</Para>
        <Para>{prettyDate}</Para>
        <Para>{prettyTime}</Para>
      </Blurb>
      <Blurb>
        <Title>Table View</Title>
        <Para>Provides all data entries ever collected for current city in a Table format</Para>
      </Blurb>
      <Blurb>
        <Title>Chart View</Title>
        <Para>Provides all data entries ever collected for current city in a Line chart format</Para>
      </Blurb>
      <Blurb>
        <Title>Track</Title>
        <Para>Get current weather data for a particular city</Para>
        <Para>Also updates data reflected in Table View and Chart View</Para>
      </Blurb>
    </DescriptorsSection>
  );
}

Descriptors.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}

export default Descriptors;