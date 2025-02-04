// components/Header.js
"use client"
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
      background:  ${props => props.background || "rgb(11 63 127)"} ;
  color: #000;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1e90ff; /* Static hover color */
//   }
`;



export default function SubHeader() {
 

  return (
    <HeaderContainer>
      <Navbar>
         <NavItem href="/">Customer Service</NavItem>
        <NavItem href="/">About Us</NavItem>
        <NavItem href="/about">Award & Certification</NavItem>
        <NavItem href="/services">FAQs</NavItem>
        <NavItem href="/contact">Customer Support</NavItem>
      </Navbar>
    </HeaderContainer>
  );
}
