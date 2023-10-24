import React from "react";
import styled from "styled-components";

const Aboutme = () => {
  return (
    <AboutMePage>
      <h1>Hi, I am Tornike. Nice to meet you.</h1>
      <StyledP>
        Since beginning my journey as a freelance designer over 11 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </StyledP>
    </AboutMePage>
  );
};
const AboutMePage = styled.div`
  background-color: #7434eb;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 250px;
  padding-left: 250px;
  padding-right: 250px;
  color: white;
`;
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;
const StyledP = styled(P)`
  color: white;
`;

export default Aboutme;
