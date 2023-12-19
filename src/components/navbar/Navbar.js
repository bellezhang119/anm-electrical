import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align to the left */
    padding: 0 1rem;
    img {
        height: 70%; /* Adjust the height as needed */
        margin-right: 2rem; /* Add margin to separate the image from other elements */
    }
`;

export const Nav = styled.nav`
    background: #ffffff;
    height: 70px;
    display: flex;
    position: sticky;
    z-index: 10;
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
    margin-bottom: 1rem;
    height: 100%;
    cursor: pointer;
`;

export const NavMenu = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    transform: translateX(0%);
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const NavNumber = styled.button`
    background: #ffffff;
    display: flex;
    margin: 0 auto;
    color: #198ccb;
    align-items: center;
    font-weight: 700;
    border: 2px solid #198ccb;
    margin: 1rem;
    margin-right: 2rem;
    font-size: 22px;
    cursor: pointer;
    border-radius: 7px;
    @media screen and (max-width: 820px) {
        display: none;
    }
    :hover {
        color: dimgrey;
        border: 2px solid dimgrey;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 820px) {
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
    position: sticky;
    top: 70px; 
    left: 0;
    width: 100%;
    z-index: 10;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    @media screen and (min-width: 820px) {
        display: none;
      }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 820px) {
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