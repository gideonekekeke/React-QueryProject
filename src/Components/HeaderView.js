import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderView = () => {
  return (
    <Container>
      <Logo />
      <NavHolder>
        <Naving to="/">Home</Naving>
        <Naving to="/about">About</Naving>
        <Naving to="/contact">Contact</Naving>
      </NavHolder>
      <UserIamge />
    </Container>
  );
};

export default HeaderView;

const UserIamge = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: silver;
`;
const Container = styled.div`
  height: 100px;
  background-color: black;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  height: 50px;
  width: 150px;
  border-radius: 3px;
  background-color: silver;
`;
const NavHolder = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const Naving = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 3px;
  transition: all 350ms;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;

  &.active {
    color: white;
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 3px;
    transition: all 350ms;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    color: #004080;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    color: #004080;
  }
`;
