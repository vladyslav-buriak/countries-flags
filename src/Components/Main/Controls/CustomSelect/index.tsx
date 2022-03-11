
import React, { FC } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            background: 'var(--color-ui-base)',
            boxShadow: 'var(--shadow)',
            border: 'none',
            outline: 'none',
            fontSize: 'var(--fs-sm)',
            bordeRadius: '0.25rem',
            padding: '0.325rem',

        }),
        option: (provided) => ({
            ...provided,
            background: 'var(--color-ui-base)',
            fontSize: 'var(--fs-sm)',
            bordeRadius: '0.25rem',
            padding: '0.325rem',
            color: 'var(--colors-text)',

        }),
    }
})`
    width:200px;
    margin-top:2rem;

    &  * {
     color: var(--colors-text)!important;
     }

     & > div[id]{
         background: var(--colors-background);
        box-shadow: red;
     }

    @media(min-width:767px){
        margin-top:0;
    }
`



