import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../Container";
import CountriesList from "../CountriesList";
import Controls from "./Controls";
import { ICountries } from '../../types';

interface MainProps {
    countries: ICountries[];
}
const MainEl = styled.main`
 padding:2.5rem 0;
`;

const Main: FC<MainProps> = ({countries}) => {

    return (
        <MainEl>
            <Container>
                <Controls />
                <CountriesList countries={countries} />
            </Container>
        </MainEl>
    )
}

export default Main;