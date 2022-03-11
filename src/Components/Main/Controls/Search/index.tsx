import React, { FC } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";


const Label = styled.label`

    display:flex;
    align-items:center;
    box-shadow:var(--shadow);
    width:100%;
    padding:1rem;
    border-radius:0.25rem;
    background: var(--color-ui-base);

    @media(min-width:767px){
        width:400px;
    }

`;
const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country...",
})`
    border:none;
    outline:none;
    font-size:var(--fs-sm);
    font-weight:var(--fw-light);
    color: var(--colors-text);
    margin-left:1rem;
    background:inherit;
    width:100%;
`;
const Search: FC = () => {
    return (
        <Label>
            <IoSearchSharp />
            <Input />
        </Label>
    )
}

export default Search;