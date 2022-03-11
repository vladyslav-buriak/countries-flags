import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import { ICountries } from './types';
import { ALL_COUNTRIES } from './API';
import axios from 'axios';

function App() {
  const [allCountries, setAllCountries] = useState<ICountries[]>([]);

  useEffect(() => {
      getAllCountries()
  }, [])

  async function getAllCountries() {
      try {
          await axios.get<ICountries[]>(ALL_COUNTRIES)
              .then(({ data }) => setAllCountries(data))
      }
      catch (e) {
          console.log(e);
      }
  }
  return (
    <>
      <Header />
      <Main countries={allCountries} />
    </>
  )
}

export default App;
