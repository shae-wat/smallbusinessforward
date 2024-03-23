import styled from "styled-components";
import {
  mobileMediaQuery,
  finalSqueezeQuery,
  desktopOnlyMediaQuery,
} from "./breakpoints";
import { Colors } from "./colors";

export const ButtonCSS = `
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

export const DesktopOnlyButton = styled.a`
  &,
  &:visited {
    display: inline;
    text-decoration: none;
    color: ${Colors.white};
    background-color: ${Colors.black};
    font-weight: bold;
    font-size: 14px;
    padding: 16px;
    border-radius: 6px;
    ${mobileMediaQuery(`display: none;`)}
  }
`;

export const Button = styled.a`
  &,
  &:visited {
    display: block;
    text-decoration: none;
    color: ${Colors.white};
    background-color: ${Colors.black};
    font-weight: bold;
    padding: 20px;
    border-radius: 6px;
    width: 30%;
    ${mobileMediaQuery(`width: 70%`)}
    margin-right: auto;
    margin-left: auto;
    ${mobileMediaQuery(`padding: 10px; border-radius: 10px;`)}
  }
`;
