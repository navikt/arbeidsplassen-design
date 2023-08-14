import { Heading, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ title, ...args }) {
  return (
    <div className="mb-4">
      <Heading size="medium" level="2" spacing>
        {title}
      </Heading>
      <RadioGroup
        legend="Velg din aldersgruppe"
        description="Informasjonen blir brukt for å gi deg bedre søketreff."
        onChange={(val) => console.log(val)}
        defaultValue="10"
        {...args}
      >
        <Radio value="10">10-20 år</Radio>
        <Radio value="20">21-45 år</Radio>
        <Radio value="40">46-80 år</Radio>
      </RadioGroup>
    </div>
  );
}

export default function RadioExample() {
  return (
    <Layout title="Radio">
      <Template title="Standard" />
      <Template
        title="Error"
        error="Vi fant ingen resultater på din aldersgruppe."
      />
      <Template title="Disabled" disabled />
      <Template title="Read only" readOnly />
    </Layout>
  );
}
