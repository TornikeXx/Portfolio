import React from "react";
import Logo from "../../assets/Frame.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavBar>
      <Logos src={Logo} />
      <SideBar>
        <Button>Mentorship</Button>
        <StyledButton>Say Hello</StyledButton>
      </SideBar>
    </NavBar>
  );
};
const Logos = styled.img`
  width: 50px;
`;
const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  &:hover {
    color: #7434eb;
  }
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
const SideBar = styled.div``;

export default Navbar;
