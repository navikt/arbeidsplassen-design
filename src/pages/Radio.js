import { Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ ...args }) {
  return (
    <div className="mb-4">
      <RadioGroup {...args}>
        <Radio value="10">10-20 år</Radio>
        <Radio value="20">21-45 år</Radio>
        <Radio value="40">46-80 år</Radio>
        <Radio value="40" disabled>
          Alle
        </Radio>
      </RadioGroup>
    </div>
  );
}

export default function RadioExample() {
  return (
    <Layout title="Radio">
      <Template
        legend="Velg din aldersgruppe"
        description="Informasjonen blir brukt for å gi deg bedre søketreff."
        onChange={(val) => console.log(val)}
        defaultValue="10"
      />

      <Template
        legend="Velg din aldersgruppe"
        description="Informasjonen blir brukt for å gi deg bedre søketreff."
        onChange={(val) => console.log(val)}
        error="Vi fant ingen resultater på din aldersgruppe."
      />

      <Template
        legend="Velg din aldersgruppe"
        description="Informasjonen blir brukt for å gi deg bedre søketreff."
        onChange={(val) => console.log(val)}
        disabled
      />
    </Layout>
  );
}
