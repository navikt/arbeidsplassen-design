import React from "react";
import { TextField } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ ...args }) {
  return (
    <div className="mb-16">
      <TextField
        label="Har du noen tilbakemeldinger?"
        description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
        {...args}
      />
    </div>
  );
}

export default function TextFieldExample() {
  return (
    <Layout title="TextField">
      <Template />
      <Template error="Tilbakemeldingen er for kort" />
      <Template disabled />
      <Template readOnly />
      <Template type="time" htmlSize="4" />
    </Layout>
  );
}
