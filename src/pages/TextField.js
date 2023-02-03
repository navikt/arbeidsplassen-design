import React from "react";
import { TextField } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import Code from "../examples/Code";

function Template({ ...args }) {
  return (
    <div className="mb-4">
      <TextField {...args} />
      <Code as="TextField" attributes={args} />
    </div>
  );
}

export default function TextFieldExample() {
  return (
    <Layout title="TextField">
      <Template label="Har du noen tilbakemeldinger?" />
      <Template
        label="Har du noen tilbakemeldinger?"
        description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
      />
      <Template
        label="Har du noen tilbakemeldinger?"
        error="Tilbakemeldingen er for kort"
      />
      <Template label="Har du noen tilbakemeldinger?" size="small" />
      <Template label="Har du noen tilbakemeldinger?" hideLabel />
      <Template label="Har du noen tilbakemeldinger?" disabled />
    </Layout>
  );
}
