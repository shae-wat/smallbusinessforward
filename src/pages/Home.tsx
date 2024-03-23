import React from "react";
import { Page, PageCardLayout } from "./Page";
import { Platform1 } from "../images";
import { HeaderFont, ParagraphFont } from "../styles";
import { Card, CardTextContent, CardImageContent } from "../views";

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <Card>
          <CardImageContent>
            <img
              src={Platform1}
              alt="image of speculative financialization versus community-oriented development"
              style={{
                display: "block",
                maxWidth: "1018px",
                maxHeight: "390px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </CardImageContent>
          <CardTextContent>
            <span>
              <HeaderFont>
                Founded by San Francisco small businesses to advocate for a
                better future
              </HeaderFont>
            </span>
            <ParagraphFont>
              We believe our city can allow our diverse small business community
              to thrive— and we are committed to fighting for policies that
              forward these goals. We serve as a resource for small business
              owners and workers as they seek to economically prosper in the
              city that we love.
            </ParagraphFont>
          </CardTextContent>
        </Card>
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
