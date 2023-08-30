import Link from "next/link";
import { BodyLong, Heading, HGrid } from "@navikt/ds-react";
import SkipLink from "@navikt/arbeidsplassen-react/SkipLink/SkipLink";
import { Footer, Header } from "@navikt/arbeidsplassen-react";

const tableOfContentByFilename = [
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
  "Header",
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
  "SkipLink",
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
          <HGrid columns="250px auto">
            <ul>
              <li>
                <BodyLong>
                  <Link href="/">Known issues</Link>
                </BodyLong>
              </li>
              {tableOfContentByFilename.map((it) => (
                <li key={it}>
                  <BodyLong>
                    <Link href={`/${it}`}>{it}</Link>
                  </BodyLong>
                </li>
              ))}
            </ul>

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
