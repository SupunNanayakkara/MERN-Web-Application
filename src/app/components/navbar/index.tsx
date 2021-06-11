import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const NavbarContainer = styled.div`
    min-heigh: 68px;
    ${tw`
        flex
        flex-row
        w-full
        max-w-2xl
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
    return <NavbarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
    </NavbarContainer>
}