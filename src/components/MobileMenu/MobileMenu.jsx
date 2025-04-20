import React from "react";
import {
  Root,
  Content,
  Portal,
  Overlay,
  Title,
  Close,
} from "@radix-ui/react-dialog";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, handleOpenChange }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Root open={isOpen} onOpenChange={handleOpenChange}>
      <Portal>
        <Overlay>
          <BackgroundOverlay />
        </Overlay>
        <Content>
          <ContentWrapper>
            <StyledButton onClick={() => handleOpenChange(false)}>
              <Icon id="close" strokeWidth={2} />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </StyledButton>
            <Nav>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </Nav>
            <Footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </Footer>
          </ContentWrapper>
        </Content>
      </Portal>
    </Root>
  );
};

const BackgroundOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsl(220deg 5% 40% / 80%);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  width: 80%;
  animation: contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(100%, 0%);
    }
    to {
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }
`;

const StyledButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  & > a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
  }
`;

const Footer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
