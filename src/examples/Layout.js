import Link from "next/link";
import { BodyLong, Heading } from "@navikt/ds-react";

export default function Layout({ children, title }) {
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

  return (
    <div className="container">
      <div className="container-toc">
        <ul>
          <li>
            <BodyLong>
              <Link href="/">← Design</Link>
            </BodyLong>
          </li>
          {tableOfContentByFilename.map((it) => (
            <li>
              <BodyLong>
                <Link href={`/${it}`}>{it}</Link>
              </BodyLong>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-content">
        <Heading size="xlarge" level="1" spacing>
          {title}
        </Heading>
        {children}
      </div>
    </div>
  );
}
