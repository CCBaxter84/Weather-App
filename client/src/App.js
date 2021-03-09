import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Pages from './components/Pages';

function App() {

  useEffect(() => {
    axios.get('/denver')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  return (
   <>
    <Header />
    <Pages />
   </>
  );
}

export default App;
