import React from "react";
import styled from "styled-components";
import {
  rhythm,
  Colors,
  tabletMediaQuery,
  desktopOnlyMediaQuery,
  gutter,
  HEADER_HEIGHT,
  ParagraphFont,
  SubheaderFont,
  LinkText,
  MicroFont,
} from "../styles";
import { InstagramLogo } from "../images";

const AppFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: ${HEADER_HEIGHT * 2}vh;
  background-color: ${Colors.background};

  position: relative;
  margin-right: auto;
  margin-left: auto;

  padding: ${rhythm(2)}px ${gutter(12)}px;
  border-radius: 4px 4px 0 0;
  ${tabletMediaQuery(
    `flex-direction: column; padding: ${rhythm(2)}px ${gutter(1 / 2)}px;`
  )}
  > * {
    padding-right: ${gutter(1)}px;
    ${tabletMediaQuery(
      `padding-right: 0; padding-bottom: ${rhythm(1)}px; width: 85%;`
    )}
  }
`;

const DetailsSection = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  > p {
    margin-top: ${rhythm(1)}px;
  }
  ${desktopOnlyMediaQuery(`width: "30%"`)}
`;

const Footer: React.FC = () => {
  return (
    <AppFooter>
      <DetailsSection>
        <MicroFont style={{ textAlign: "center" }}>Contact us:</MicroFont>
        <ParagraphFont
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontWeight: "700",
          }}
        >
          smallbusinessforward@gmail.com
        </ParagraphFont>
        <a
          style={{ marginTop: "30px", textAlign: "center" }}
          href="https://www.instagram.com/smallbusinessforward/"
          target="_blank"
        >
          <img
            alt="Instagram profile link for Small Business Forward"
            src={InstagramLogo}
            style={{ width: "40px" }}
          />
        </a>
        <MicroFont style={{ textAlign: "center" }}>
          Small Business Forward is a 501(c)(4) public benefit organization.
        </MicroFont>
        <MicroFont style={{ marginTop: "0px", textAlign: "center" }}>
          Contributions are not tax-deductible.
        </MicroFont>
      </DetailsSection>
    </AppFooter>
  );
};

export default Footer;
