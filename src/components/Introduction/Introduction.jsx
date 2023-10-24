import React from "react";
import styled from "styled-components";
import Avatar from "../../assets/Avatar.png";
import Pic1 from "../../assets/Pic1.png";

const Introduction = () => {
  return (
    <IntroductionPage>
      <H1>Designer, Frontend Developer & Mentor</H1>
      <H2>
        I design and code beautifully simple things, and I love what I do.
      </H2>

      <Image1 src={Avatar} />
      <Image2 src={Pic1} alt="" />
    </IntroductionPage>
  );
};
const IntroductionPage = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-top: 100px;
`;
const Image1 = styled.img`
  margin-top: 50px;
`;
const Image2 = styled.img`
  margin-top: 90px;
  width: 800px;
`;
const H1 = styled.h1`
  color: #22233d;
`;
const H2 = styled.h2`
  color: #22233d;
`;

export default Introduction;
