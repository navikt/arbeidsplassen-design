import { Accordion } from "@navikt/ds-react";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const Arbeidsted = () => {
  const handleChange = (val) => console.log(val);

  return (
    <>
      <CheckboxGroup
        hideLegend
        legend="Velg arbeidssted"
        onChange={(val) => handleChange(val)}
        defaultValue={["Bakerst"]}
      >
        <Checkbox value="Fremst">Alta</Checkbox>
        <Checkbox value="Midterst">Bergen</Checkbox>
        <Checkbox value="Bakerst">Oslo</Checkbox>
        <Checkbox value="Fremst">Trondheim</Checkbox>
      </CheckboxGroup>
    </>
  );
};

const Yrke = () => {
  const handleChange = (val) => console.log(val);

  return (
    <>
      <CheckboxGroup
        hideLegend
        legend="Velg arbeidssted"
        onChange={(val) => handleChange(val)}
        defaultValue={["Bakerst"]}
      >
        <Checkbox value="Fremst">Helse og sosial (5715)</Checkbox>
        <Checkbox value="Midterst">Utdanning (3037)</Checkbox>
        <Checkbox value="Bakerst">Salg og service (2635)</Checkbox>
        <Checkbox value="Fremst">Kontor og økonomi (2220)</Checkbox>
      </CheckboxGroup>
    </>
  );
};

const AccordionExample = () => {
  return (
    <Layout title="Accordion">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Område</Accordion.Header>
          <Accordion.Content>
            <Arbeidsted />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Yrke</Accordion.Header>
          <Accordion.Content>
            <Yrke />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Layout>
  );
};

export default AccordionExample;
