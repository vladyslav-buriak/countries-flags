import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../Components/Container';
import { useParams } from 'react-router-dom';
const Details: FC = () => {

    const {countryname} = useParams();

    return (
     <h2>Details {countryname}  </h2>
    )
}

export default Details;