import React, { FC } from "react";
import styled from "styled-components";
import { IInfoCard } from "../../../types";


const CardItem = styled.div`
  width:100%;

  @media(min-width:576px){
      width:45%;
  }

  @media(min-width:767px){
      width:30%;
  }

  @media(min-width:1024px){
    width:250px;
  }
`;
const CardImg = styled.img`
  width:100%;
  height:150px;
  display:block;
  object-fit:cover;
`;

const CardContent = styled.div`
  padding:1rem 1.5rem 2rem;
`;
const CardTitle = styled.h3`
  font-size:var(--fs-md);
`;
const CardMenu = styled.ul`
  list-style:none;
  margin-top:0.5rem;
`;
const CardMenuItem = styled.li`
  font-size:var(--fs-sm);
     line-height:1.5;

  & > span{
      font-size:0.75rem;
  }
`;

interface infoCardProps {
    countryInfo: IInfoCard;
    onclick:()=>void;
}
const Card: FC<infoCardProps> = ({ countryInfo ,onclick }) => {
    return (
        <>
            <CardItem onClick={onclick} >
                <CardImg src={countryInfo.url} />
                <CardContent>
                    <CardTitle>{countryInfo.name}</CardTitle>
                    <CardMenu>
                        {countryInfo.info.map((i) => <CardMenuItem> {i.title} : <span>{i.description}</span></CardMenuItem>)}
                    </CardMenu>
                </CardContent>
            </CardItem>
        </>
    )
}

export default Card;