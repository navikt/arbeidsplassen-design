import Layout from "../examples/Layout";
import { BodyLong, Heading, Switch } from "@navikt/ds-react";

export default function Home() {
  return (
    <Layout title="Designsystem">
      <Heading level="2" size="medium" title="Known issues" spacing>
        Known issues
      </Heading>

      <div className="mb-8">
        <BodyLong spacing>
          Switch i dark theme har kanskje for liten kontrast mot mørk bakgrunn
          når den ikke er skrudd på
        </BodyLong>
        <Switch>Slå på notifikasjoner</Switch>
      </div>
    </Layout>
  );
}
