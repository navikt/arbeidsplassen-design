import { Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const HeadingExample = () => {
  return (
    <Layout title="Heading">
      <Heading level="1" size="xlarge" spacing>
        Heading 1
      </Heading>
      <Heading level="2" size="large" spacing>
        Heading 2
      </Heading>
      <Heading level="3" size="medium" spacing>
        Heading 3
      </Heading>
      <Heading level="4" size="small" spacing>
        Heading 4
      </Heading>
      <Heading level="5" size="xsmall" spacing>
        Heading 5
      </Heading>
    </Layout>
  );
};

export default HeadingExample;
