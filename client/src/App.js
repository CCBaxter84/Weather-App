import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Pages from './components/Pages';
import weatherData from './database.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(weatherData);
  }, []);

  return (
   <>
    <Header />
    <Pages data={data}/>
   </>
  );
}

export default App;
