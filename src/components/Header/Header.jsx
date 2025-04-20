import React from "react";
import styled from "styled-components";

import { COLORS, QUERY, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <FluidWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </FluidWrapper>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        handleOpenChange={setShowMobileMenu}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  gap: clamp(1.2rem, 12.6vw - 4.5rem, 3rem);
  margin: 0px 48px;

  @media ${QUERY.phoneAndBelow} {
    display: none;
  }
`;

const FluidWrapper = styled.div`
  flex: 1;

  display: none;

  @media ${QUERY.phoneAndBelow} {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
`;

const Side = styled.div`
  flex: 1;
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
