import React, { FC } from "react";
import Search from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options: IOptions[] = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
]

interface IOptions {
    value: string;
    label: string;
}

const ControlsInner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  
   
@media(min-width:767px){
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}
`
const Controls: FC = () => {
    return (
        <>
            <ControlsInner>
                <Search />
                <CustomSelect options={options} isClearable isSearchable={false} placeholder="Filter by Region" />
            </ControlsInner>
        </>
    )
}

export default Controls