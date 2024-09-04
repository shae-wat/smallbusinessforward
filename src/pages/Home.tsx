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

const FeaturedWorkPage: React.FC = () => {
  return (
    <Page>
      <PageCardLayout>
        <Card style={{ width: "60%" }}>
          <CardImageContent style={{ width: "50%" }}>
            <img
              src={SBFLogoCard}
              alt="Small Business Forward"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </CardImageContent>
          <CardTextContent style={{ width: "60%", paddingBottom: 0 }}>
            <HeaderFont>
              Founded by San Francisco small businesses to advocate for a better
              future
            </HeaderFont>
            <ParagraphFont color={Colors.offBlack}>
              We believe our city can allow our diverse small business community
              to thrive— and we are committed to fighting for policies that
              forward these goals. We serve as a resource for small business
              owners and workers as they seek to economically prosper in the
              city that we love.
            </ParagraphFont>
          </CardTextContent>
        </Card>
        <Button
          target="_blank"
          href="https://actionnetwork.org/forms/subscribe-small-business-forward/"
        >
          Sign up for the newsletter
        </Button>
        <div
          style={{
            background: Colors.cardBackground,
            paddingTop: `${rhythm(2)}px`,
          }}
        >
          <Card>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform1}
                alt="speculative financialization versus community-oriented small business funding"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Realizing small business funding opportunities
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Increased & streamlined access to city resources, grants, and
                programs to help nascent & legacy small businesses thrive.
                Investment in all San Franciscans, including access to capital &
                opportunities to start new businesses.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support legislation and city programs that foster the small
                business community. We seek to inform small business owners &
                workers of funding opportunities that even the playing field
                with the huge corporations with tax breaks.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support a public banking option to fund the small businesses
                that are excluded from corporate financial institutions. We seek
                to create resources to protect our city’s small businesses from
                crisis and shutting down.
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform2}
                alt="commercial rent control advocacy versus business closures and storefront vacancies"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Commercial rent controls
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Protection from eviction and predatory landlords and more
                equitable storefront & office leasing through commercial rent
                controls.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We seek to educate and provide resources for legal assistance on
                lease and rent negotiations to protect small businesses from
                eviction.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support standardizing commercial lease terms to make
                commercial leasing more manageable by the business community.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support legislation and funding that makes commercial renting
                and owning more accessible for small businesses.
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform3}
                alt="progressively larger piggy banks with progressively taller stacks of cash, the largest piggybank has the most cash underneath it"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Fair taxation on businesses
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Progressive taxation that relieves the disproportionate burden
                on small business owners by ensuring San Francisco’s wealthiest
                corporations are paying their fair share.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support fair fees and taxes relative to the business’s
                ability to pay— recognizing that businesses starting out need
                fee waivers and established businesses can handle reasonable
                charges that increase as the business profits increase.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support programs that improve the economic health of the
                community through taxation, and think the businesses benefitting
                the most from the current conditions should be the ones
                investing the most to make our city a better place to live—
                leaving behind a legacy that allows others to economically
                prosper as well.
              </ParagraphFont>
            </CardTextContent>
          </Card>
          <Card>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform4}
                alt="affordable housing for SF workers versus Commuting from outside areas"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Affordable housing
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Prioritizing increasing affordable housing to allow small
                business owners & workers to live in San Francisco.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We acknowledge that the cost-of-living crisis impacts small
                business owners and workers the most, driving away humble
                establishments and displacing their workers.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support affordable housing development that allows workers
                and owners to live in the same city as their small business— we
                reject that more unbridled profiteering development will achieve
                more affordability.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support initiatives that realize financing for affordable
                housing and initiatives that combat housing being treated only
                as speculative stock market shares.
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform5}
                alt="right to unionize: hand holding union card, shop with sign that says proudly union"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Right to unionize and workplace protections
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Right to unionize and workplace protections for workers in San
                Francisco.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We respect worker’s rights to organize and engage with one
                another to seek better working conditions under the protection
                of the National Labor Relations Board.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We acknowledge that a more equitable workplace environment
                creates healthier outcomes for owners, workers, and the city.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support bargaining in good faith about wages, hours, vacation
                time, insurance, safety practices and other mandatory subjects.
              </ParagraphFont>
            </CardTextContent>
            <CardTextContent style={{ width: "30%" }}>
              <img
                src={Platform6}
                alt="Community Safety: multiple hands reach towards a person with a heart icon, the hands have overlaying text that says: mental health teams, safe consumption sites, community ambassadors, healthy public conditions"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <HeaderFont style={{ color: Colors.white }}>
                Community safety that works
              </HeaderFont>
              <ParagraphFont color={Colors.white}>
                Promotion of alternative forms of community safety that shifts
                the burden from incarceration and policing to proven
                community-driven strategies.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We endorse community safety measures to prevent business theft
                and disturbance and we endorse enabling restoration after theft
                and other business disturbances.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We acknowledge that property crime and theft are symptoms of
                larger structural issues and reject reactionary use of police,
                which has not prevented property crime and whose budget steals
                from services that actually keep the community healthy and
                crime-free.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We support a non-carceral response that restores the business
                and protects the dignity of workers, youths, and those surviving
                poverty and addiction. We support the use of community
                ambassadors, mental health teams, and safe consumption sites for
                maintaining healthy public conditions.
              </ParagraphFont>
              <ParagraphFont color={Colors.white}>
                We reject the use of sweeps — sweeps are extremely violent,
                robbing people suffering from poverty of the little possessions
                they have and, crucially, don't get to the root of the problem.
                Police sweeps simply move folks to another block, pushing the
                problem in front of more and more of our small businesses.
              </ParagraphFont>
            </CardTextContent>
          </Card>
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

export default FeaturedWorkPage;
