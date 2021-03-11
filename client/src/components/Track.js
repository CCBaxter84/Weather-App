import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { formatCityForAPI, formatCityForUI, containsInvalidChars } from '../helpers.js';

const ModalBackground = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ModalContent = styled.section`
  align-items: center;
  background-color: lightsteelblue;
  border-radius: 10px;
  color: #0d3fbd;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  padding: 30px 60px;
  width: 70%;
  z-index: 2;
`;

const ModalArticle = styled.article`
  font-family: 'Lato', sans-serif;
`;

const SubmitInput = styled.input`
  --azalea: rgb(181, 25, 119);
  border: 2px solid var(--azalea);
  border-radius: 5px;
  color: var(--azalea);
  font-size: large;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

function Track({ changeModal, changeCity }) {
  const [ newCity, setNewCity ] = useState('');

  function handleClick(event) {
    const name = event.target.getAttribute('name');
    if (name === 'background') {
      changeModal(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (containsInvalidChars(newCity)) {
      console.log('hold on to your butts');
      return;
    }
    try {
      await console.log( formatCityForUI(newCity) );
      await console.log( formatCityForAPI(newCity) );
      const weatherData = await axios.get(`/openWeather/${newCity}`);
      const { data } = weatherData.data;
      await axios.post(`/entries`, data);
      changeModal(false);
      changeCity(newCity);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalBackground name='background' onClick={handleClick}>
      <ModalContent >
        <ModalArticle>
          <h2>Get Current Weather</h2>
        </ModalArticle>
        <form onSubmit={handleSubmit}>
          <label>
            City:&nbsp;
            <input
              type='text'
              value={newCity}
              onChange={e => setNewCity(e.target.value)}/>
          </label>
          <SubmitInput type='submit' value='Submit'/>
        </form>
      </ModalContent>
    </ModalBackground>
  );
}

Track.propTypes = {
  changeModal: PropTypes.func,
  setCity: PropTypes.func
}

export default Track;