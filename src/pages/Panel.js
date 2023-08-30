import { BodyLong, Heading, Panel } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ ...args }) {
  return (
    <div className="mb-2">
      <Panel border={false} {...args}>
        <Heading spacing level="2" size="medium">
          Tips til jobbsøknaden
        </Heading>
        <BodyLong>
          Målet med jobbsøknaden er å bli kalt inn til intervju. En god søknad
          er forutsetningen for at en arbeidsgiver skal få lyst til å møte
          akkurat deg. Les annonsen nøye og se hva de spør etter.
        </BodyLong>
      </Panel>
    </div>
  );
}

export default function PanelExample() {
  return (
    <Layout title="Panel">
      <Template className="arb-panel-primary" />
      <Template className="arb-panel-secondary" />
      <Template className="arb-panel-tertiary" />
    </Layout>
  );
}
