import React from "react";
import { Page, PageCardLayout } from "./Page";
import { Platform1 } from "../images";
import { HeaderFont, ParagraphFont, Colors, rhythm } from "../styles";
import { Card, CardTextContent, CardImageContent } from "../views";

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <Card>
          <CardImageContent style={{ width: "60%" }}>
            <img
              src={Platform1}
              alt="image of speculative financialization versus community-oriented development"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </CardImageContent>
          <CardTextContent style={{ width: "40%" }}>
            <HeaderFont>
              Founded by San Francisco small businesses to advocate for a better
              future
            </HeaderFont>
            <ParagraphFont color={Colors.black}>
              We believe our city can allow our diverse small business community
              to thrive— and we are committed to fighting for policies that
              forward these goals. We serve as a resource for small business
              owners and workers as they seek to economically prosper in the
              city that we love.
            </ParagraphFont>
          </CardTextContent>
        </Card>
        <div style={{ background: Colors.black, paddingTop: `${rhythm(2)}px` }}>
          <HeaderFont
            style={{
              color: Colors.white,
              textAlign: "center",
            }}
          >
            Our Platform
          </HeaderFont>
          <Card>
            <CardTextContent style={{ width: "30%" }}>
              <HeaderFont style={{ color: Colors.white }}>
                Realizing small business funding opportunities
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Realizing small business funding opportunities, especially a
                public bank financing option
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <HeaderFont style={{ color: Colors.white }}>
                Commercial rent controls
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Protection from eviction and predatory landlords and more
                equitable storefront & office leasing through commercial rent
                controls
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <HeaderFont style={{ color: Colors.white }}>
                Fair taxation on businesses
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Progressive taxation that relieves the disproportionate burden
                on small business owners by ensuring San Francisco’s wealthiest
                corporations are paying their fair share
              </ParagraphFont>
            </CardTextContent>
          </Card>
        </div>
      </PageCardLayout>
    </Page>
  );
};

export default FeaturedWorkPage;
