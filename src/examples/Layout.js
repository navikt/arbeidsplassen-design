import Link from "next/link";
import { BodyLong, Heading } from "@navikt/ds-react";

const tableOfContentByFilename = [
  "Accordion",
  "Alert",
  "Article",
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
  "Stepper",
  "Switch",
  "Table",
  "Tabs",
  "Tag",
  "Textarea",
  "TextField",
  "ToggleGroup",
  "Tooltip",
].sort();

export default function Layout({
  children,
  title,
  size = "default",
  headerOffset = false,
}) {
  return (
    <div className={`layout${headerOffset && " dsa-header-offset"}`}>
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
      <div className={`layout-content-${size}`}>
        <Heading size="xlarge" level="1" spacing>
          {title}
        </Heading>
        {children}
      </div>
    </div>
  );
}
