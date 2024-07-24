import Link from "next/link";
import { BodyLong, Heading, HGrid, Link as AkselLink } from "@navikt/ds-react";
import SkipLink from "@navikt/arbeidsplassen-react/SkipLink/SkipLink";
import { Footer, Header } from "@navikt/arbeidsplassen-react";

const arbeidsplassenComponents = [
  "FeedbackButton",
  "Header",
  "Illustrations",
  "LoginPage",
  "NotFound",
  "RichText",
  "SkipLink",
].sort();

const akselComponents = [
  "Accordion",
  "Alert",
  "Button",
  "Checkbox",
  "Chips",
  "ComboBox",
  "ConfirmationPanel",
  "CopyButton",
  "DatePicker",
  "Dropdown",
  "ErrorSummary",
  "GuidePanel",
  "Heading",
  "HelpText",
  "Ingress",
  "Link",
  "LinkPanel",
  "Modal",
  "Pagination",
  "Panel",
  "Popover",
  "Radio",
  "ReadMore",
  "Search",
  "Select",
  "Stepper",
  "Switch",
  "Table",
  "Tabs",
  "Tag",
  "Textarea",
  "TextField",
  "ToggleGroup",
  "Tooltip",
  "Typography",
].sort();

export default function Layout({ children, title, headerArgs }) {
  headerArgs = {
    onLogin: console.log,
    onLogout: console.log,
    ...headerArgs,
  };
  return (
    <>
      <div className="arb-push-footer-down">
        <SkipLink />
        <Header {...headerArgs} />
        <main id="main" className="container-large mt-8 mb-24">
          <HGrid columns={{ md: "auto auto", lg: "350px auto" }}>
            <div>
              <BodyLong spacing>
                <AkselLink as={Link} href="/">
                  Known issues
                </AkselLink>
              </BodyLong>
              <Heading size="xsmall" level="3" spacing>
                Arbeidsplassen components
              </Heading>
              <ul>
                {arbeidsplassenComponents.map((it) => (
                  <li key={it}>
                    <BodyLong>
                      <AkselLink as={Link} href={`/${it}`}>
                        {it}
                      </AkselLink>
                    </BodyLong>
                  </li>
                ))}
              </ul>

              <Heading size="xsmall" level="3" spacing>
                Aksel components
              </Heading>
              <ul>
                {akselComponents.map((it) => (
                  <li key={it}>
                    <BodyLong>
                      <AkselLink as={Link} href={`/${it}`}>
                        {it}
                      </AkselLink>
                    </BodyLong>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Heading size="large" level="1" className="mb-8">
                {title}
              </Heading>
              {children}
            </div>
          </HGrid>
        </main>
      </div>
      <Footer />
    </>
  );
}
