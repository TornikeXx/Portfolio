import React from "react";
import styled from "styled-components";

const MeetUp = () => {
  return (
    <MeetUpCard>
      <h1>Start a Project</h1>
      <p>
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </p>
      <Button2>Lets do This</Button2>
    </MeetUpCard>
  );
};
const MeetUpCard = styled.div`
  background-color: #0e0824;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  color: white;
  text-align: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: -100px;
  position: relative;
`;
const Button2 = styled.button`
  background-color: #0e0824;
  color: white;
  transition: 0.3s;
  padding: 15px;
  border: 2px solid #167d76;
  border-radius: 50%;
  font-size: larger;
  &:hover {
    background-color: #167d76;
    color: #0e0824;
  }
`;

export default MeetUp;
