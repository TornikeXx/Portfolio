import React from "react";
import styled from "styled-components";
import Card1 from "../../assets/Card1.png";

const SkillCards = () => {
  return (
    <SkillCardsPage>
      <SkillCard>
        <Logos src={Card1} />
        <h1>Designer</h1>
        <P>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </P>
        <ColoredH2>Things I enjoy designing:</ColoredH2>
        <P>UX, UI, Web, Apps, Logos</P>
        <ColoredH2>Design tools:</ColoredH2>
        <P>Affinity Designer</P>
        <P>Figma</P>
        <P>Font Awesome</P>
        <P>Pen & Papper</P>
        <P>Sketch</P>
        <P>Webflow</P>
      </SkillCard>
      <SkillCard>
        <Logos src={Card1} />
        <h1>Designer</h1>
        <P>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </P>
        <ColoredH2>Things I enjoy designing:</ColoredH2>
        <P>UX, UI, Web, Apps, Logos</P>
        <ColoredH2>Design tools:</ColoredH2>
        <P>Affinity Designer</P>
        <P>Figma</P>
        <P>Font Awesome</P>
        <P>Pen & Papper</P>
        <P>Sketch</P>
        <P>Webflow</P>
      </SkillCard>
      <SkillCard>
        <Logos src={Card1} />
        <h1>Designer</h1>
        <P>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </P>
        <ColoredH2>Things I enjoy designing:</ColoredH2>
        <P>UX, UI, Web, Apps, Logos</P>
        <ColoredH2>Design tools:</ColoredH2>
        <P>Affinity Designer</P>
        <P>Figma</P>
        <P>Font Awesome</P>
        <P>Pen & Papper</P>
        <P>Sketch</P>
        <P>Webflow</P>
      </SkillCard>
    </SkillCardsPage>
  );
};
const SkillCardsPage = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: -100px;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  background-color: white;
  margin-bottom: 150px;
`;
const SkillCard = styled.div`
  padding: 50px;
`;
const Logos = styled.img`
  width: 50px;
`;
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;
const ColoredH2 = styled.h2`
  color: #7434eb;
  margin-top: 100px;
`;

export default SkillCards;
