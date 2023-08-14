import React from "react";
import { TextField } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import Code from "../examples/Code";

function Template({ ...args }) {
  return (
    <div className="mb-4">
      <TextField
        label="Har du noen tilbakemeldinger?"
        description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
        {...args}
      />
      <Code as="TextField" attributes={args} />
    </div>
  );
}

export default function TextFieldExample() {
  return (
    <Layout title="TextField">
      <Template />
      <Template error="Tilbakemeldingen er for kort" />
      <Template size="small" />
      <Template hideLabel />
      <Template disabled />
      <Template readOnly />
    </Layout>
  );
}
