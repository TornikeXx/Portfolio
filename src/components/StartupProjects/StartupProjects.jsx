import React from "react";
import Card3 from "../../assets/Card3.png";
import styled from "styled-components";

const StartupProjects = () => {
  return (
    <>
      <StartupPage>
        <h1>My Startup Projects</h1>
        <StyledP>
          I'm a bit of a digital product junky. Over the years, I've used
          hundreds of web and mobile apps in different industries and verticals.
          Eventually, I decided that it would be a fun challenge to try
          designing and building my own.
        </StyledP>
      </StartupPage>
      <StartupCardsPage>
        <StartupCards>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
          <MiddleCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </MiddleCard>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
        </StartupCards>
        <StartupCards>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
          <MiddleCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </MiddleCard>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
        </StartupCards>
        <StartupCards>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
          <MiddleCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </MiddleCard>
          <StartupCard>
            <img src={Card3} alt="" />
            <P>
              A powerful, easy-to-configure form backend for designers and
              developers
            </P>
          </StartupCard>
        </StartupCards>
      </StartupCardsPage>
    </>
  );
};
const StartupPage = styled.div`
  margin-top: 100px;
  background-color: #7434eb;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 250px;
  padding-left: 250px;
  padding-right: 250px;
  color: white;
`;
const StartupCardsPage = styled.div`
  margin-top: -150px;
`;
const StartupCards = styled.div`
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
`;
const StartupCard = styled.div`
  background-color: white;
  text-align: center;
  padding: 50px;
  border: 0.3px solid gray;
  border-radius: 6px;
`;
const MiddleCard = styled(StartupCard)`
  margin-left: 10px;
  margin-right: 10px;
`;
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;
const StyledP = styled(P)`
  color: white;
`;

export default StartupProjects;
