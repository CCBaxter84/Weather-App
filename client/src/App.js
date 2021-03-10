import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { reducer } from './helpers';
import Header from './components/Header';
import Pages from './components/Pages';
import Track from './components/Track';
import weatherData from './database.js';

function App() {
  const [ data, dispatch ] = useReducer(reducer, []);
  const [ city, setCity ] = useState('Denver');
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    axios.get(`/entries/${city}`)
      .then(res => {
        console.log(res);
        dispatch({ type: 'setAll', value: res.data })
      })
      .catch(error => console.log(error));
  }, [city]);

  function setField(field, value, id) {
    dispatch( {type: field, value: value, id: id} );
    axios.patch(`/entries/${id}`, { [field]: value})
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function changeCity(newCity) {
    setCity(newCity);
  }

  return (
   <>
    <Header openModal={openModal}/>
    <Pages data={data} setField={setField} city={city}/>
    {showModal && <Track closeModal={closeModal} changeCity={changeCity}/>}
   </>
  );
}

export default App;
