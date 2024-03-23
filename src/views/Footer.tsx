import React from "react";
import styled from "styled-components";
import {
  rhythm,
  Colors,
  tabletMediaQuery,
  gutter,
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  ParagraphFont,
  SubheaderFont,
  LinkText,
} from "../styles";

const AppFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: ${HEADER_HEIGHT * 3}vh;
  background-color: ${Colors.footerBackground};

  position: relative;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: ${rhythm(2)}px ${gutter(2)}px;
  border-radius: 4px 4px 0 0;
  ${tabletMediaQuery(
    `flex-direction: column; padding: ${rhythm(2)}px ${gutter(1 / 2)}px;`
  )}
  > * {
    padding-right: ${gutter(1)}px;
    width: 30%;
    ${tabletMediaQuery(
      `padding-right: 0; padding-bottom: ${rhythm(1)}px; width: 85%;`
    )}
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-top: ${rhythm(1)}px;
  }
`;

const Footer: React.FC = () => {
  return (
    <AppFooter>
      <div></div>
      <DetailsSection>
        <SubheaderFont>Small Business Forward</SubheaderFont>
        <SubheaderFont>2024</SubheaderFont>
        <ParagraphFont>
          Small Business Forward is a 501(c)(4) public benefit organization.
          Contributions are not tax-deductible.
        </ParagraphFont>
      </DetailsSection>
    </AppFooter>
  );
};

export default Footer;
