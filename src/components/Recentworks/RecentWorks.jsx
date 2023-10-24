import React from "react";
import styled from "styled-components";
import Company from "../../assets/company.png";

const RecentWorks = () => {
  return (
    <>
      <RecentWorkPage>
        <H1>My Recenet Work</H1>
        <P>
          Here are a few past design projects I've worked on. Want to see more?
        </P>
      </RecentWorkPage>
      <RecentWorksCards>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
      </RecentWorksCards>
      <RecentWorksCards>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
        <ProjectCard>
          <Img3 src={Company} alt="" />
        </ProjectCard>
      </RecentWorksCards>
      <CentredButton>
        <StyledButton>See more on Dribble</StyledButton>
      </CentredButton>
    </>
  );
};
const RecentWorkPage = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;
const RecentWorksCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-right: 5%;
`;
const ProjectCard = styled.div`
  border-radius: 1px;
  max-width: 400px;
`;
const Img3 = styled.img`
  height: 100%;
  width: 100%;
`;
const CentredButton = styled.div`
  text-align: center;
  margin-top: 100px;
  padding-bottom: 100px;
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
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;

export default RecentWorks;
