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
        <Side>
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
        </Side>
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERY.tabletAndBelow} {
    display: none;
  }
`;

const FluidWrapper = styled.div`
  display: none;

  @media ${QUERY.tabletAndBelow} {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
`;

const Side = styled.div`
  flex: 1;
  margin-right: auto;
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
