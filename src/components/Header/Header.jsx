import React from 'react';
import styled from 'styled-components';

import {COLORS, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import Spacer from "../Spacer/index.js";

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side/>
            </MainHeader>
        </header>
    );
};

const Side = styled.div`
    flex: 1;
`;

const MainHeader = styled.div`
    padding: 0 2rem;
    border-bottom: 1px solid ${COLORS.gray[300]};
    display: flex;
    margin-top: 2.5rem;
    height: 4.5rem;
    align-items: center;
    justify-content: center;
`;

const LogoWrapper = styled.div`
    position: absolute;
    left: 2rem;
    z-index: -1;
`;

const Nav = styled.nav`
    display: flex;
    gap: 3rem;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
