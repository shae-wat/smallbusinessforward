import React from "react";
import { Page, PageCardLayout } from "./Page";
import {
  SBFLogoCard,
  Platform1,
  Platform2,
  Platform3,
  Platform4,
  Platform5,
  Platform6,
  EndorsedAaron,
  EndorsedConnie,
  EndorsedDean,
  EndorsedJackie,
  EndorsedCA,
  EndorsedSF,
} from "../images";
import {
  HeaderFont,
  ParagraphFont,
  Colors,
  rhythm,
  LinkText,
  Button,
} from "../styles";
import { Card, CardTextContent, CardImageContent } from "../views";

interface EndorsementsPageProps {
  onHomePageClick: () => void;
}

const EndorsementsPage: React.FC<EndorsementsPageProps> = (
  props: EndorsementsPageProps
) => {
  return (
    <Page>
      <PageCardLayout>
        <Card
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            marginBottom: 0,
          }}
        >
          <CardImageContent>
            <img
              src={SBFLogoCard}
              alt="Small Business Forward"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "200px",
                height: "auto",
                objectFit: "contain",
                marginBottom: "24px",
              }}
            />
          </CardImageContent>
          <CardTextContent>
            <HeaderFont>2024 General Election Endorsements</HeaderFont>
          </CardTextContent>
        </Card>
        <div
          style={{
            background: Colors.cardBackground,
          }}
        >
          <a href="https://www.instagram.com/p/C_dzMW4y00o/" target="_blank">
            <Card>
              <CardImageContent>
                <img
                  src={EndorsedAaron}
                  alt="endorsed california ballot measures general election 2024"
                  style={{
                    display: "block",
                    height: "auto",
                    width: "100%",
                    maxWidth: "400px",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
              <CardImageContent>
                <img
                  src={EndorsedConnie}
                  alt="endorsed california ballot measures general election 2024"
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
              <CardImageContent>
                <img
                  src={EndorsedDean}
                  alt="endorsed california ballot measures general election 2024"
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
              <CardImageContent>
                <img
                  src={EndorsedJackie}
                  alt="endorsed california ballot measures general election 2024"
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
            </Card>
          </a>
          <a href="https://www.instagram.com/p/C_dn9Pdvc0S/" target="_blank">
            <Card>
              <CardImageContent>
                <img
                  src={EndorsedCA}
                  alt="endorsed california ballot measures general election 2024"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
              <CardImageContent>
                <img
                  src={EndorsedSF}
                  alt="endorsed san francisco ballot measures general election 2024"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </CardImageContent>
            </Card>
          </a>
        </div>
        <Button
          target="_blank"
          href="https://actionnetwork.org/forms/subscribe-small-business-forward/"
        >
          Sign up for the newsletter
        </Button>
        <Button
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSddzNGNtlMiXp5aCUK3a4QtSPAF0Cv21SW_7RtZMkcj9JGPQw/viewform"
        >
          Become a member
        </Button>
        <Button
          target="_blank"
          href="https://actionnetwork.org/fundraising/donate-small-business-forward/"
        >
          Donate
        </Button>
      </PageCardLayout>
    </Page>
  );
};

export default EndorsementsPage;
