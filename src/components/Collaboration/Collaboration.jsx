import React from "react";
import Card2 from "../../assets/Card2.png";
import styled from "styled-components";

const Collaboration = () => {
  return (
    <>
      <CollabPage>
        <H1>I'm proud to have collaborated with some awesome companies:</H1>
      </CollabPage>
      <CollabCards>
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
      </CollabCards>
      <CollabCards>
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
        <img src={Card2} alt="" />
      </CollabCards>
    </>
  );
};
const H1 = styled.h1`
  color: #22233d;
`;
const CollabPage = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const CollabCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export default Collaboration;
