import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align to the left */
    padding: 0 1rem;
    img {
        height: 60%; /* Adjust the height as needed */
        margin-right: 2rem; /* Add margin to separate the image from other elements */
    }
`;

export const Nav = styled.nav`
    background: #ffffff;
    height: 60px;
    display: flex;
    position: sticky;
    z-index: 100;
    top: 0;
`;

export const NavLink = styled(Link)`
    color: #198ccb;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 22px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #838485;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    transform: translateX(-20%);
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 600px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
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