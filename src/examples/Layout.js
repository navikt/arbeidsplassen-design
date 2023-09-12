import Link from "next/link";
import { BodyLong, Heading, HGrid } from "@navikt/ds-react";
import SkipLink from "@navikt/arbeidsplassen-react/SkipLink/SkipLink";
import { Footer, Header } from "@navikt/arbeidsplassen-react";

const arbeidsplassenComponents = [
  "FeedbackButton",
  "Header",
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
        <main id="main" className="container-large mt-2 mb-6">
          <HGrid columns="350px auto">
            <div>
              <BodyLong spacing>
                <Link href="/">Known issues</Link>
              </BodyLong>
              <Heading size="xsmall" level="3" spacing>
                Arbeidsplassen components
              </Heading>
              <ul>
                {arbeidsplassenComponents.map((it) => (
                  <li key={it}>
                    <BodyLong>
                      <Link href={`/${it}`}>{it}</Link>
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
                      <Link href={`/${it}`}>{it}</Link>
                    </BodyLong>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Heading size="large" level="1" className="mb-2">
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
