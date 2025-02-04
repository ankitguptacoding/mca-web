"use client";
import styled from "styled-components";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import logo from "../../../public/assets/images/kent-logo.svg"
// import logo from "../../../../../public/images/kent-logo.svg";
import arrowUpBlack from "../../../public/assets/images/arrowupblack.svg";
import arrowDownBlack from "../../../public/assets/images/arrowdownblack.svg";
import SubHeader from "./subHeader.js";

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8%;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 20px;
  position: relative;
`;

const NavItem = styled.div`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: color 0.3s ease, background-color 0.3s ease;
  color: var(--dark);
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px;
  display: flex;
  align-items: center;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease, opacity 0.2s ease;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  color: #1f387c;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  width: 250px;
  background: inherit;
  &:focus {
    border-color: #1e90ff;
  }
`;


const nav1Options = [
  {label: "RO", value: "ro"}, {label: "Alkaline", value: "alkaline"}, {label: "Water Purifier Buying guide", value: "water_purifier_buying_guide"}, {label: "UV+UF", value: "uv_uf"},  {label: "RO on Rent", value: "ro_on_rent"}
]
const nav2Options = [
  {label: "Bathroom Water Softener", value: "bathroom_water_softener"}, {label: "Washing Machine Water Softener", value: "washing_machine_water_softener"}, {label: "Sand Filter", value: "sand_filter"}
]
const nav3Options = [
  {label: "RO", value: "ro"}, {label: "Alkaline", value: "alkaline"}, {label: "Water Purifier Buying guide", value: "water_purifier_buying_guide"}, 
]
export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure this component renders only after the client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  if (!isClient) return null;

  return (
    <HeaderContainer>
      {/* SubHeader */}
      <SubHeader />

      {/* Main Header */}
      <NavbarContainer>
        {/* Logo */}
        <LogoContainer>
          <NextImage src='/assets/icons/black-new.png' alt="Kent Logo" width={100} height={100} />
        </LogoContainer>

        {/* Navigation Menu */}
        <Navbar>
          {["Water Purifiers", "Water Softeners"].map(
            (item, index) => (
              <NavItem
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                <NextImage
                  src={hoveredItem === index ? arrowUpBlack : arrowDownBlack}
                  alt={hoveredItem === index ? "Arrow Up" : "Arrow Down"}
                  width={12}
                  height={12}
                  style={{ marginLeft: "8px" }}
                />
                <DropdownMenu>
                  <DropdownItem href={`/${item.toLowerCase().replace(/\s/g, "-")}/option1`}>
                    Option 1
                  </DropdownItem>
                  <DropdownItem href={`/${item.toLowerCase().replace(/\s/g, "-")}/option2`}>
                    Option 2
                  </DropdownItem>
                  <DropdownItem href={`/${item.toLowerCase().replace(/\s/g, "-")}/option3`}>
                    Option 3
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>
            )
          )}
              <NavItem>
                {"Spare Parts & Accessories"}
              </NavItem>
              <NavItem>
                {"Buy AMC"}
              </NavItem>
        </Navbar>
              
        {/* Search Box */}
        <SearchBox type="text" placeholder="Search..." />

      </NavbarContainer>
    </HeaderContainer>
  );
}
