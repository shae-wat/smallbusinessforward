import styled from "styled-components";
import {
  rhythm,
  gutter,
  Colors,
  mobileMediaQuery,
  tabletMediaQuery,
  desktopOnlyMediaQuery,
  CONTENT_MAX_WIDTH,
} from "../styles";

export const Card = styled.section`
  position: relative;
  display: flex;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  padding: ${rhythm(1)}px ${gutter(1)}px;
  ${tabletMediaQuery(`
    flex-direction: column;
    padding: ${rhythm(2 / 3)}px ${gutter(1 / 3)}px;
  `)}

  justify-content: space-between;
  border-radius: 4px;

  > *:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    ${tabletMediaQuery(`width: auto;`)}
  }
  > *:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    ${tabletMediaQuery(`width: auto;`)}
  }
  ${mobileMediaQuery(`width: 95% !important`)}
`;

export const CardTextContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: ${rhythm(1 / 12)}px ${gutter(1)}px ${rhythm(2 / 3)}px ${gutter(2)}px;
  ${mobileMediaQuery(`width: 90% !important`)}
  ${tabletMediaQuery(
    `padding: ${rhythm(1)}px ${gutter(1)}px`
  )}

  > *:first-child {
    margin-bottom: ${rhythm(1)}px;
    ${tabletMediaQuery(`margin-bottom: ${rhythm(2 / 3)}px;`)}
  }
  > *:not(:first-child) {
    margin-bottom: ${rhythm(1 / 2)}px;
    ${tabletMediaQuery(`margin-bottom: ${rhythm(1 / 4)}px;`)}
  }
`;

export const CardImageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${mobileMediaQuery(`width: 100% !important`)}
`;
