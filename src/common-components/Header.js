import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: dimgrey;
`;

const BarImage = styled.img`
  transition: 1s;
  max-width: 5rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    transform: rotate(360deg);
  }
`;

const HeaderButtons = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const HeaderButton = styled(Link)`
  padding-left: 1rem;
  text-decoration: none;
  color: lightgrey;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Link to="/">
        <BarImage src="exampleimage.png" alt="Example Page" />
      </Link>
      <HeaderButtons>
        <HeaderButton to={"/"}>Home</HeaderButton>
        <HeaderButton to={"/Data"}>Data</HeaderButton>
      </HeaderButtons>
    </HeaderBar>
  );
};

export default Header;
