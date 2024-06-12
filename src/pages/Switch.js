import { Switch, Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ title, ...args }) {
  return (
    <div className="mb-16">
      <Heading size="medium" level="2" spacing>
        {title}
      </Heading>
      <Switch {...args}>Motta beskjed på e-post ved nye treff</Switch>
      <Switch checked {...args}>Motta beskjed på e-post ved nye treff</Switch>
    </div>
  );
}

const SwitchExample = () => {
  return (
    <Layout title="Switch">
      <div className="mb-16">
      <Heading size="medium" level="2" spacing>Standard</Heading>
      <Switch description="Du får en påminnelse med mulighet til å fornye.">Motta beskjed på e-post ved nye treff</Switch>
    </div>
      <Template title="Disabled" disabled />
      <Template title="Read only" readOnly />
      <Template title="Loading" loading />
    </Layout>
  );
};

export default SwitchExample;
