import { Heading, LinkPanel } from "@navikt/ds-react";
import asMarkup from "../examples/utils/asMarkup";
import Layout from "../examples/Layout";

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
      {asMarkup("LinkPanel", args)}
    </div>
  );
}

export default function LinkPanelExample() {
  return (
    <Layout title="LinkPanel">
      <Template />
      <Template className="arb-link-panel-green-dark" />
      <Template className="arb-link-panel-green" />
      <Template className="arb-link-panel-blue" />
      <Template className="arb-link-panel-peach" />

      <Template className="arb-link-panel-peach" skipDescription />
    </Layout>
  );
}
