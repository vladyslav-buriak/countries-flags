import React, { FC } from "react";
import styled from "styled-components";


const MainEl = styled.main`

`;

const Main: FC = ({ children }) => {

    return (
        <>
            {children}
        </>
    )
}

export default Main;