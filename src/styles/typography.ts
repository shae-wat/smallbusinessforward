import styled from "styled-components";
import { mobileMediaQuery, finalSqueezeQuery } from "./breakpoints";
import { Colors } from "./colors";

export const FontCSS = `
  letter-spacing: 0.08px;
  word-break: keep-all; /* dont split a word */
  word-spacing: 1px;
  text-decoration: none;
  font-style: normal;
  font-stretch: normal;
  /* dont allow user-agent stylesheet to set margins */
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;

export const HeaderFont = styled.h1`
  ${FontCSS}
  font-size: 32px;
  font-weight: bold;
  color: ${Colors.offBlack};
  line-height: 36px;

  ${mobileMediaQuery(`font-size: 24px; line-height: 26px;`)}
`;

export const SubheaderFont = styled.h2`
  ${FontCSS}
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #e8e8e8;

  ${mobileMediaQuery(`font-size: 16px; line-height: 20px;`)}
  ${finalSqueezeQuery(`font-size: 14px; line-height: 18px;`)}
`;

export const ParagraphFont = styled.p`
  ${FontCSS}
  color: ${(props: { color?: typeof Colors.millenialPink }) =>
    props.color || Colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ${mobileMediaQuery(`font-size: 14px; line-height: 18px;`)}
`;

export const MicroFont = styled.p`
  ${FontCSS}
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.white};

  ${mobileMediaQuery(`font-size: 12px; line-height: 14px;`)}
`;

// add bold font styling within a sentence to bold a word
export const BoldText = styled.span`
  ${FontCSS}
  color: ${(props: { color?: typeof Colors.millenialPink }) =>
    props.color || Colors.white};
  /* TODO:  font-family: BoldFontFamily */
  font-weight: 700;
`;

export const LinkText = styled.a`
  &,
  &:visited {
    display: inline;
    /* text-decoration: none; */
    color: ${(props: { color?: typeof Colors.millenialPink }) =>
      props.color || Colors.cardLink};
    font-weight: bold;
  }
`;
