import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderPart = () => {
  return (
    <Container>
      <LogoHold>Use Query</LogoHold>
      <Navigations>
        <Nav to="/">Display</Nav>
        <Nav to="/create">CreateNew</Nav>

        {/* <Nav to="/">Create an Account</Nav> */}
      </Navigations>
      <Nav2 to="register">Create an Account</Nav2>
    </Container>
  );
};

export default HeaderPart;
const Container = styled.div`
  font-weight: bold;
  width: 100%;
  height: 100px;
  background: #0e2f5a;
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  /* padding-left: 30px; */
`;
const LogoHold = styled.div`
  font-size: 25px;
  margin-left: 50px;
`;
const Navigations = styled.div`
  display: flex;
  margin-left: 40px;
  width: 170px;
  justify-content: space-between;
  align-items: center;
`;
const Nav2 = styled(NavLink)`
  padding: 20px 40px;
  display: flex;
  justify-content: flex-end;

  /* background-color: rgba(225, 225, 225, 0.4); */
  color: white;
  border-radius: 5px;
  margin-left: 200px;

  cursor: pointer;
  text-decoration: none;
  &.active {
    background-color: rgba(225, 225, 225, 0.4);
    width: 150px;
  }
`;
const Nav = styled(NavLink)`
  padding: 20px 40px;

  /* background-color: rgba(225, 225, 225, 0.4); */
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  &.active {
    background-color: rgba(225, 225, 225, 0.4);
  }
`;
