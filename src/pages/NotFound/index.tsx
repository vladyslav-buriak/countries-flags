import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../Components/Container';

const Title = styled.h2`
  margin-top:4rem;
  text-align:center;
  font-size:6rem;
  font-weight:var(----fw-bold);
`

const NotFound: FC = () => {
    return (
        <Container>
            <Title>404</Title>
        </Container>
    )
}

export default NotFound;