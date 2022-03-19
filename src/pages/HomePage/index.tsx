import React, { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ICountries } from '../../types';
import { ALL_COUNTRIES } from '../../API';
import axios from 'axios';
import CountriesList from '../../Components/Main/CountriesList/CountriesList';
import Controls from '../../Components/Main/Controls';
import { Container } from '../../Components/Container';

const HomePage: FC = () => {

  const [allCountries, setAllCountries] = useState<ICountries[]>([]);
  const [filterCountries, setfilterCountries] = useState<ICountries[]>(allCountries);

  useEffect(() => {
    getAllCountries()
  }, [])

  async function getAllCountries() {
    try {
      await axios.get<ICountries[]>(ALL_COUNTRIES)
        .then(({ data }) => setAllCountries(data));
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleSearch = (reg: any, search: string) => {
    let data = [...allCountries];
    if (reg) {
      data = data.filter(c => c.region.includes(reg))
    }

    if (search) {
      data = data.filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }
    setfilterCountries(data);
  }

  return (
    <>
      <Container>
        <Controls handleSearch={handleSearch} />
        <CountriesList filterCountries={filterCountries} />
      </Container>
    </>
  )
}

export default HomePage