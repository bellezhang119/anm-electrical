import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align to the left */
    padding: 0 1rem;
    img {
        height: 90%; /* Adjust the height as needed */
        margin-right: 1rem; /* Add margin to separate the image from other elements */
    }

`;
export const Nav = styled.nav`
    background: #184b96;
    height: 70px;
    display: flex;
    justify-content: space-between;
    z-index: 12;
    /* Third Nav */
    justify-content: flex-start; 
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 24px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #838485;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #184b96;
    top: 70px; // Height of the Nav
    left: 0;
    width: 100%;
    z-index: 11;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;