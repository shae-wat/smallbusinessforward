import React from "react";
import styled from "styled-components";
import {
  Colors,
  rhythm,
  gutter,
  CONTENT_MAX_WIDTH,
  mobileMediaQuery,
  HeaderFont,
  HEADER_HEIGHT,
  DesktopOnlyButton,
  LinkText,
} from "../styles";
import { SBFLogoCircle } from "../images";

const AppHeader = styled.header`
  position: -webkit-sticky; /* for browser compatibility */
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${HEADER_HEIGHT}vh;
  background-color: ${Colors.neutralGreen};

  margin-right: auto;
  margin-left: auto;

  padding: 0 ${gutter(12)}px;
  ${mobileMediaQuery(`padding: ${rhythm(1 / 12)}px ${gutter(1)}px;`)}
  border-radius: 0 0 4px 4px;
  z-index: 999;
`;

const AppTitle = styled.span`
  display: flex;
  justify-content: row;
  align-items: center;
  > * {
    margin-right: ${gutter(1)}px;
    ${mobileMediaQuery(`margin-right: ${gutter(1 / 2)}px;`)}
  }
`;

interface HeaderProps {
  page: string;
  onEndorsementsPageClick: () => void;
  onHomePageClick: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <AppHeader>
      <AppTitle>
        <img src={SBFLogoCircle} height={66} alt="Small Business Forward" />
      </AppTitle>
      <div>
        <LinkText
          style={{ marginRight: "24px" }}
          onClick={
            props.page == "Home"
              ? () => props.onEndorsementsPageClick()
              : () => props.onHomePageClick()
          }
        >
          {props.page == "Home" ? "2024 Endorsements" : "Home"}
        </LinkText>
        <DesktopOnlyButton
          target="_blank"
          href="https://actionnetwork.org/forms/subscribe-small-business-forward/"
        >
          Sign up for the newsletter
        </DesktopOnlyButton>
      </div>
    </AppHeader>
  );
};

export default Header;
