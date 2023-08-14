import { Heading, Textarea } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import React from "react";

function Template({ title, ...args }) {
  return (
    <div className="mb-4">
      <Heading size="medium" level="2" spacing>
        {title}
      </Heading>
      <Textarea
        label="Har du noen tilbakemeldinger?"
        maxLength={400}
        {...args}
        description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
      />
    </div>
  );
}

const TextareaExample = () => {
  return (
    <Layout title="Textarea">
      <Template title="Standard" />
      <Template title="Error" error="For mange tegn" />
      <Template title="Disabled" disabled />
      <Template title="Read only" readOnly />
    </Layout>
  );
};

export default TextareaExample;
