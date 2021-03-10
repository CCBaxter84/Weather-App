import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { reducer } from './helperFunctions';
import Header from './components/Header';
import Pages from './components/Pages';
import weatherData from './database.js';

function App() {
  const [ data, dispatch ] = useReducer(reducer, []);
  const [ city, setCity ] = useState('Denver');

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

  return (
   <>
    <Header />
    <Pages data={data} setField={setField} city={city}/>
   </>
  );
}

export default App;
