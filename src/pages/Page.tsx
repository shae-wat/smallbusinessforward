import React from "react";
import styled from "styled-components";
import { gutter, rhythm, mobileMediaQuery, tabletMediaQuery } from "../styles";

export const PageTitleLayout = styled.div`
  margin-bottom: ${rhythm(3 / 2)}px;
`;

export const PageSection = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rhythm(2)}px;

    ${mobileMediaQuery(`
      margin-bottom: ${rhythm(1)}px;
    `)};
  }
`;

export const PageSectionTitleLayout = styled.div`
  margin-bottom: ${rhythm(1 / 2)}px;
`;

export const PageTitleChildLayout = styled.div`
  margin-bottom: ${rhythm(1 / 4)}px;
`;

export const PageSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(5 / 6)}px;

  ${mobileMediaQuery(`
    margin-bottom: ${rhythm(1 / 2)}px;
  `)};
`;

// uniform space between elements in a section
export const PageCardLayout = styled.div`
  > * {
    margin-bottom: ${rhythm(3 / 2)}px;
  }
`;

interface PageProps {
  children: React.ReactNode;
}

const StyledPage = styled.section`
  display: block;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: ${rhythm(1)}px 0;
  ${tabletMediaQuery(`padding: ${rhythm(2)}px ${gutter(1)}px`)};
  ${mobileMediaQuery(`padding: ${rhythm(1)}px ${gutter(1 / 3)}px;`)};
`;

export const Page = (props: PageProps) => (
  //TODO: add google analytics page tracking

  <StyledPage>{props.children}</StyledPage>
);
