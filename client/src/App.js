import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { reducer, isANumber } from './helpers';
import Header from './components/Header';
import Pages from './components/Pages';
import Track from './components/Track';

function App() {
  const [ data, dispatch ] = useReducer(reducer, []);
  const [ city, setCity ] = useState('Denver');
  const [ showModal, setShowModal ] = useState(false);
  const [ error, setError ] = useState('');

  useEffect(() => {
    axios.get(`/entries/${city}`)
      .then(res => {
        dispatch({ type: 'setAll', value: res.data })
      })
      .catch(error => console.log(error));
  }, [city, showModal]);

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

  function changeModal(bool) {
    setShowModal(bool);
  }

  function changeCity(newCity) {
    setCity(newCity);
  }

  return (
   <>
    <Header changeModal={changeModal}/>
    <Pages data={data} setField={setField} city={city} error={error}/>
    {showModal && <Track changeModal={changeModal} changeCity={changeCity} />}
   </>
  );
}

export default App;
