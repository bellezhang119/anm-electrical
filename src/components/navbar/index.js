import React from "react";
import { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo,
    Dropdown
} from "./Navbar";
import logoImage from "../../assets/logo.jpg";
const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <Nav>
                <NavLogo to="/"><img src={logoImage} alt="logo" /></NavLogo>
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