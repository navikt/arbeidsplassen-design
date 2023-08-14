import { CopyButton, Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const CopyButtonExample = () => {
  return (
    <Layout title="CopyButton">
      <Heading size="medium" level="2" spacing>
        Neutral
      </Heading>
      <CopyButton copyText="3.14" className="mb-2" />

      <Heading size="medium" level="2" spacing>
        Med tekst
      </Heading>
      <CopyButton copyText="3.14" text="Kopier" className="mb-2" />

      <Heading size="medium" level="2" spacing>
        Action
      </Heading>
      <CopyButton
        copyText="3.14"
        variant="action"
        text="Kopier"
        className="mb-2"
      />
    </Layout>
  );
};

export default CopyButtonExample;
