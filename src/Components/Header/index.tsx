import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const HeaderEl = styled.header`
 box-shadow:var(--shadow);
 background-color: var(--color-ui-base);
`;

const HeaderInner = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:2rem 0;
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration:none;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  alignItems: center;
  cursor:pointer;
  font-size: var(--fs-sm);
  text-transform:capitalize;
`;

const Header: FC = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (

    <HeaderEl>
      <Container>
        <HeaderInner>
          <Title>
            Where in the world?
          </Title>
          <ThemeSwitcher onClick={toggleTheme} >
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Mode</span>
          </ThemeSwitcher>
        </HeaderInner>
      </Container>
    </HeaderEl>
  )
}

export default Header;