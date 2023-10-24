import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterPage>
      <FooterContent>
        <Logos src={Logo} />
        <h2>Living, learning, & leveling up one day at a time.</h2>
        <SocialsBtn>
          <FontAwesomeIcon icon={faTwitter} />
        </SocialsBtn>
        <SocialsBtn>
          <FontAwesomeIcon icon={faFacebook} />
        </SocialsBtn>
        <SocialsBtn>
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialsBtn>
      </FooterContent>
    </FooterPage>
  );
};
const FooterPage = styled.div`
  text-align: center;
  background-color: #7434eb;
  padding-top: 200px;
  margin-bottom: 0%;
  padding-bottom: 100px;
`;
const FooterContent = styled.div`
  color: #c4c4c4;
`;
const SocialsBtn = styled.button`
  background-color: #7434eb;
  border-radius: 50%;
  border: 1.5px solid gray;
  color: white;
  padding: 15px;
  margin: 10px;
  &:hover {
    background-color: white;
    color: #7434eb;
  }
`;
const Logos = styled.img`
  width: 50px;
`;

export default Footer;
