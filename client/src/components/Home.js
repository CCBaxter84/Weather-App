import styled from 'styled-components';
import PropTypes from 'prop-types';
import img from '../Weather-Icons-4.png';
import Descriptors from './Descriptors.js';

const Container = styled.main`
  align-items center;
  display: flex;
  color: seashell;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  justify-content: center;
  margin: 20px;
  width: 100%;
  &:before {
    content:'';
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

const Title = styled.article`
  font-family: cursive;
  font-size: 48px;
  font-weight: bold;
  max-height: 200px;
  max-width: 80%;
`;

const Para = styled.p`
  font-style: italic;
`;

function Home({ currentLocation, data }) {
  return (
    <Container >
      <Title>
        <p style={{margin: 0}}>Poor Mark's Weather Almanac</p>
      </Title>
      <Para>The one-stop shop for collecting, comparing, and curating weather data</Para>
      <Descriptors
        data={data}
        currentLocation={currentLocation}
      />
    </Container>
  );
}

Home.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}

export default Home;