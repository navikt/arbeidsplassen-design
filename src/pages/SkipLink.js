import Layout from "../examples/Layout";
import { BodyLong } from "@navikt/ds-react";

const SkipLinkExample = () => {
  return (
    <Layout title="SkipLink">
      <BodyLong>
        Skip link vises øverst i venstre hjørne når du bruker tabulator. Sørg
        for å plassere skip link først i tabulator-rekkefølgen.{" "}
        <a href="#">Lenke som skal få fokus etter skip link</a>
      </BodyLong>
    </Layout>
  );
};

export default SkipLinkExample;
