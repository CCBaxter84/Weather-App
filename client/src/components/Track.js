import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { formatCityForAPI, dropdownOptions } from '../helpers.js';
import { formContainsErrors } from '../security.js';
import { ErrorArticle } from '../sharedStyles.js';
import Dropdown from './Dropdown.js';
import Radio from './Radio.js';

// Stylings
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
const StyledLabel = styled.label`
  display: flex;
  margin: 2px;
`;

function Track({ changeModal, changeCity }) {
  // State
  const [ newCity, setNewCity ] = useState('');
  const [ newState, setNewState ] = useState('');
  const [ newCountry, setNewCountry ] = useState('');
  const [ error, setError ] = useState('');

  // Ref for auto-focusing on city text box
  const textInputRef = useRef(null);
  useEffect(() => textInputRef.current.focus(), []);

  // Handler functions for changing and submitting form data
  function handleClick(event) {
    const name = event.target.getAttribute('name');
    if (name === 'background') {
      changeModal(false);
    }
  }
  async function getAndPostWeather(city, state, country) {
    try {
      const formattedCity = formatCityForAPI(city, state, country);
      const weatherData = await axios.get(`/openWeather/${formattedCity}`);
      const { data } = weatherData.data;
      data.state = state;
      data.country = country;
      await axios.post(`/entries`, data);
      changeModal(false);
      changeCity(newCity, newState, newCountry);
    } catch (error) {
      console.log(error);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const hasErrors = formContainsErrors(newCity, newState, newCountry, setError);
    if (!hasErrors) {
      getAndPostWeather(newCity, newState, newCountry);
    }
  }

  // Modal form to render
  return (
    <ModalBackground name='background' onClick={handleClick}>
      <ModalContent >
        <ModalArticle>
          <h2>Get Current Weather Data</h2>
        </ModalArticle>
        <form onSubmit={handleSubmit}>
          <label>
            City:&nbsp;
            <input
              type='text'
              value={newCity}
              ref={textInputRef}
              onChange={e => setNewCity(e.target.value)}/>
          </label>
          <StyledLabel>
            State:&nbsp;
            <Dropdown
              options={dropdownOptions}
              handleChange={e => setNewState(e.target.value)}
            />
          </StyledLabel>
          <StyledLabel>
            Country:&nbsp;
            <Radio handleChange={e => setNewCountry(e.target.value)}/>
          </StyledLabel>
          <SubmitInput type='submit' value='Submit'/>
        </form>
        {error.length > 0 && <ErrorArticle><h2>{error}</h2></ErrorArticle>}
      </ModalContent>
    </ModalBackground>
  );
}

Track.propTypes = {
  changeModal: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired
}

export default Track;