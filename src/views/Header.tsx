import React from "react";
import styled from "styled-components";
import {
  Colors,
  gutter,
  CONTENT_MAX_WIDTH,
  mobileMediaQuery,
  HeaderFont,
  HEADER_HEIGHT,
} from "../styles";
import { SBFLogoHeader } from "../images";

const AppHeader = styled.header`
  position: -webkit-sticky; /* for browser compatibility */
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${HEADER_HEIGHT}vh;
  background-color: ${Colors.footerBackground};

  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 ${gutter(1)}px;
  border-radius: 0 0 4px 4px;
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

const Header: React.FC = () => {
  return (
    <AppHeader>
      <AppTitle>
        <img src={SBFLogoHeader} height={50} alt="Small Business Forward" />
      </AppTitle>
    </AppHeader>
  );
};

export default Header;
