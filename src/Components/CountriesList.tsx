import React, { FC } from "react";
import { ICountries } from "../types";
import styled from "styled-components";
import Card from "./Main/Card";

const CountriesListInner = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top:3rem;
  cursor:pointer;
`
interface CountriesListProps {
    countries: ICountries[];
}
const CountriesList: FC<CountriesListProps> = ({ countries }) => {

    return (

        <CountriesListInner>
            {countries.map((c) => {

                const countryCard = {
                    url: c.flags.png,
                    name: c.name,
                    info: [
                        {
                            title: 'Population',
                            description: c.population,
                        },
                        {
                            title: 'Region',
                            description: c.region,
                        },
                        {
                            title: 'Capital',
                            description: c.capital,
                        },
                    ],
                }

                return <Card key={c.name} countryInfo={countryCard} />

            })}
        </CountriesListInner>

    )
}

export default CountriesList;