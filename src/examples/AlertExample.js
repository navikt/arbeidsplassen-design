import { Alert, Heading, Link } from "@navikt/ds-react";
import asMarkup from "./utils/asMarkup";

function Template({ showTitle, ...args }) {
  return (
    <div className="mb-2">
      <Alert {...args}>
        {showTitle && (
          <Heading spacing size="small" level="3">
            Viktig informasjon
          </Heading>
        )}
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>
      {asMarkup("Alert", args)}
    </div>
  );
}

const AlertExample = () => {
  return (
    <>
      <Template variant="info" />
      <Template variant="success" />
      <Template variant="warning" />
      <Template variant="error" />
      <Template variant="info" size="small" />
      <Template variant="info" fullWidth />
      <Template variant="info" inline />
    </>
  );
};

export default AlertExample;
