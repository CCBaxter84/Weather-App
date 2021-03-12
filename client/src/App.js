import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { isANumber, formatCityForUI } from './helpers.js';
import { reducer, reducer2 } from './reducers.js';
import Header from './components/Header';
import Pages from './components/Pages';
import Track from './components/Track';

// Initial state for current tracked location
const initialState = {
  currentCity: 'Denver',
  currentState: 'Colorado',
  currentCountry: 'us'
}

function App() {
  // Reducers and State
  const [ data, dispatch ] = useReducer(reducer, []);
  const [ currentLocation, dispatch2 ] = useReducer(reducer2, initialState)
  const [ showModal, setShowModal ] = useState(false);
  const [ error, setError ] = useState('');

  // Get all data from database related to current tracked location on mount and changes to tracked location
  useEffect(() => {
    axios.get(`/entries/${currentLocation.currentCity}/${currentLocation.currentCountry}`)
      .then(res => {
        dispatch({ type: 'setAll', value: res.data })
      })
      .catch(error => console.log(error));
  }, [currentLocation]);

  // Helper functions for children components
  // Function for changing current weather data within Table View
  function setField(field, value, id) {
    const isEmpty = value === '';
    const updatedValue = isEmpty ? 0 : value;

    if (isANumber(value) || isEmpty) {
      dispatch( {type: field, value: value, id: id} );
      axios.patch(`/entries/${id}`, { [field]: updatedValue})
        .catch(error => console.log(error));
    } else {
      setError('Entry must be a number');
      setTimeout(() => setError(''), 3000);
    }
  }
  // Open and close Modal
  function changeModal(bool) {
    setShowModal(bool);
  }
  // Update current tracked location
  function changeCity(newCity, newState, newCountry) {
    const formattedCity = formatCityForUI(newCity);
    dispatch2({ type: 'all', city: formattedCity, state: newState, country: newCountry });
  }

  return (
   <>
    <Header changeModal={changeModal}/>
    <Pages data={data} setField={setField} currentLocation={currentLocation} error={error}/>
    {showModal && <Track changeModal={changeModal} changeCity={changeCity} />}
   </>
  );
}

export default App;
