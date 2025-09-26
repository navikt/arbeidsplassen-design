import Layout from "../examples/Layout";
import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { NotFound } from "@navikt/arbeidsplassen-react";

const NotFoundExample = () => {
  return (
    <Layout title="NotFound">
      <NotFound className="mb-16" />

      <Heading size="medium" level="2" spacing>
        Custom title and content
      </Heading>

      <NotFound title="Fant ikke stillingsannonsen">
        <BodyLong spacing>
          Annonsen kan være utløpt eller blitt fjernet av arbeidsgiver.
        </BodyLong>
        <BodyLong>
          <Link href="/">Gå til stillingsøket</Link>
        </BodyLong>
      </NotFound>
    </Layout>
  );
};

export default NotFoundExample;
