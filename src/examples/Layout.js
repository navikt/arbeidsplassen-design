import Link from "next/link";
import { BodyLong, Heading } from "@navikt/ds-react";
import SkipLink from "@navikt/arbeidsplassen-react/SkipLink/SkipLink";
import { Footer, Header } from "@navikt/arbeidsplassen-react";

const tableOfContentByFilename = [
  "Accordion",
  "Alert",
  "Button",
  "Checkbox",
  "Chips",
  "ConfirmationPanel",
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

export default function Layout({ children, title, skipContainer = false }) {
  return (
    <>
      <div className="arb-push-footer-down">
        <SkipLink />
        <Header />
        <main id="main" className="mb-6">
          <div className="container-large layout-toc">
            <ul>
              <li>
                <BodyLong>
                  <Link href="/">← Design</Link>
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
          </div>
          <div className={!skipContainer ? "container-medium" : ""}>
            <Heading size="xlarge" level="1" spacing>
              {title}
            </Heading>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
