import { BodyLong, Link, VStack } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const LinkExample = () => {
  return (
    <Layout title="Link">
      <BodyLong spacing>
        Jobbtreff er en ny tjeneste på <Link inlineText href="#">arbeidsplassen.no</Link>.
        Nå kan du som er jobbsøker bli kjent med en bedrift som trenger folk. De
        forteller om hva slags kompetanse de trenger og om jobbmulighetene. Vi
        har forenklet søkeprosessen slik at du med noen få klikk kan vise
        hvorfor du er rett person for jobben.
      </BodyLong>

      <VStack gap="3">
        <BodyLong>
          <Link href="#">Action variant (default)</Link>
        </BodyLong>
        <BodyLong>
          <Link variant="neutral" href="#">Neutral variant</Link>
        </BodyLong>
        <BodyLong>
          <Link variant="subtle" href="#">Subtle variant</Link>
        </BodyLong>
      </VStack>
    </Layout>
  );
};

export default LinkExample;
