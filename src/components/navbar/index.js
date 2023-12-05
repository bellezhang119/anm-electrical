import React from "react";
import { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLogo,
  Dropdown,
  NavNumber,
} from "./Navbar";
import logoImage from "../../assets/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(1111111111);
      setIsCopied(true);
      toast.success("Copied to clipboard", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed copy to cliboard", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logoImage} alt="logo" />
        </NavLogo>
        <Bars onClick={toggleDropdown} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            About
          </NavLink>
          <NavLink to="/" activeStyle>
            Our Services
          </NavLink>
          <NavLink to="/" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavNumber onClick={copyToClipboard}>111 111 1111</NavNumber>
        <ToastContainer />
      </Nav>
      <Dropdown isOpen={isDropdownOpen}>
        <NavLink to="/" activeStyle onClick={toggleDropdown}>
          About
        </NavLink>
        <NavLink to="/" activeStyle onClick={toggleDropdown}>
          Our Services
        </NavLink>
        <NavLink to="/" activeStyle onClick={toggleDropdown}>
          Contact Us
        </NavLink>
      </Dropdown>
    </>
  );
};

export default Navbar;
