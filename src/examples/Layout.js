import Link from "next/link";
import { BodyLong, Heading } from "@navikt/ds-react";
import SkipLink from "@navikt/arbeidsplassen-react/SkipLink/SkipLink";

const tableOfContentByFilename = [
  "Accordion",
  "Alert",
  "Button",
  "Checkbox",
  "Chips",
  "ConfirmationPanel",
  "DatePicker",
  "ErrorSummary",
  "Footer",
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

export default function Layout({ children, title, size = "default" }) {
  return (
    <div className="layout">
      <SkipLink />
      <div className="layout-toc">
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
      <main id="main" className={`layout-content-${size}`}>
        <Heading size="xlarge" level="1" spacing>
          {title}
        </Heading>
        {children}
      </main>
    </div>
  );
}
