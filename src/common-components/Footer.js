import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterBar = styled.div`
  width: 100%;
  background-color: lightgrey;
  position: fixed;
  bottom: 0px;
`;

const FooterItems = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterButton = styled(Link)`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterBar>
      <FooterItems>
        <FooterButton to={"/Contact"}>Contact Us!</FooterButton>
        <div>©Example Company 2021</div>
      </FooterItems>
    </FooterBar>
  );
};

export default Footer;
