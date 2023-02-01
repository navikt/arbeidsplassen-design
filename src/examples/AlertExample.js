import { Alert, Heading, Link } from "@navikt/ds-react";

const AlertExample = () => {
  return (
    <>
      <Heading size="small" level="2" spacing>
        Info
      </Heading>
      <Alert variant="info" className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Success
      </Heading>
      <Alert variant="success" className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Warning
      </Heading>
      <Alert variant="warning" className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Error
      </Heading>
      <Alert variant="error" className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Inline
      </Heading>
      <Alert variant="info" inline className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Small
      </Heading>
      <Alert variant="info" size="small" className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Full width
      </Heading>
      <Alert variant="info" fullWidth className="mb-2">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>

      <Heading size="small" level="2" spacing>
        Med heading
      </Heading>
      <Alert variant="info" className="mb-2">
        <Heading spacing size="small" level="3">
          Viktig informasjon
        </Heading>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.{" "}
        <Link href="#">Les mer om feilen på arbeidsplassen.no</Link>
      </Alert>
    </>
  );
};

export default AlertExample;
