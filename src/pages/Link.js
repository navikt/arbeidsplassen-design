import { BodyLong, Link } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const LinkExample = () => {
  return (
    <Layout title="Link">
      <BodyLong spacing>
        <Link href="#">Gå til jobbtreff</Link>
      </BodyLong>

      <BodyLong>
        Jobbtreff er en ny tjeneste på <Link href="#">arbeidsplassen.no</Link>.
        Nå kan du som er jobbsøker bli kjent med en bedrift som trenger folk. De
        forteller om hva slags kompetanse de trenger og om jobbmulighetene. Vi
        har forenklet søkeprosessen slik at du med noen få klikk kan vise
        hvorfor du er rett person for jobben.
      </BodyLong>
    </Layout>
  );
};

export default LinkExample;
