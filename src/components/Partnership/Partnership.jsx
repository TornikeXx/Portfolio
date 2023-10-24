import React from "react";
import styled from "styled-components";

const Partnership = () => {
  return (
    <PartnerShipPage>
      <H1>Interested in collaborating with me?</H1>
      <P>
        I’m always open to discussing product design work or partnership
        opportunities.
      </P>
      <StyledButton>Start a conversation</StyledButton>
    </PartnerShipPage>
  );
};
const PartnerShipPage = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;
const H1 = styled.h1`
  color: #22233d;
`;
const StyledButton = styled.button`
  font-size: 20px;
  margin-left: 10px;
  transition: 0.3s;
  padding: 8px;
  background-color: white;
  color: #7434eb;
  border-radius: 20px;
  border: 2px solid #7434eb;
  &:hover {
    background-color: #7434eb;
    color: white;
  }
`;

export default Partnership;
