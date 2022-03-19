import React, { FC, useEffect, useRef, useState } from "react";
import Search from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options: IOptions[] = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

interface IOptions {
    value: string;
    label: string;
}

interface ISearchProps {
    handleSearch: (reg: any, serch: any) => void;
}

const ControlsInner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-top:2rem;
  
    @media(min-width:767px){
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
`
const Controls: FC<ISearchProps> = ({ handleSearch }) => {

    const [region, setRegion] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        handleSearch(region, search);
    }, [region, search])

    const changeRegion = (n: any) => {
        const value = n.value ? n.value : "no value";
        setRegion(value);
    }

    return (
        <>
            <ControlsInner>
                <Search search={search} setSearch={setSearch} />
                <CustomSelect onChange={changeRegion} options={options} isSearchable={false} placeholder="Filter by Region" />
            </ControlsInner>
        </>
    )
}

export default Controls