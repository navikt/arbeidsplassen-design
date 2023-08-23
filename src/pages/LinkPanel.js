import { LinkPanel } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import Code from "../examples/Code";

function Template({ skipDescription, ...args }) {
  return (
    <div className="mb-2">
      <LinkPanel href="#" {...args}>
        <LinkPanel.Title>Møt en bedrift</LinkPanel.Title>
        {!skipDescription && (
          <LinkPanel.Description>
            Følg en direkte sending og bli kjent med bedriften og deres
            stillinger.
          </LinkPanel.Description>
        )}
      </LinkPanel>
      <Code as="LinkPanel" attributes={args} />
    </div>
  );
}

export default function LinkPanelExample() {
  return (
    <Layout title="LinkPanel">
      <Template />
      <Template className="arb-link-panel-primary" />
      <Template className="arb-link-panel-secondary" />
      <Template className="arb-link-panel-tertiary" />
      <Template className="arb-link-panel-tertiary" skipDescription />
    </Layout>
  );
}
