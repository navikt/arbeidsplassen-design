import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const CheckboxExample = () => {
  const handleChange = (val) => console.log(val);

  return (
    <Layout title="Checkbox">
      <CheckboxGroup
        legend="Velg arbeidssted"
        description="Du kan velge flere steder om du vil"
        onChange={(val) => handleChange(val)}
        defaultValue={["Bakerst"]}
      >
        <Checkbox value="Fremst">Alta</Checkbox>
        <Checkbox value="Midterst">Bergen</Checkbox>
        <Checkbox value="Bakerst">Oslo</Checkbox>
        <Checkbox value="Fremst">Trondheim</Checkbox>
        <Checkbox value="Førersetet" disabled>
          Jan Mayen
        </Checkbox>
      </CheckboxGroup>
    </Layout>
  );
};

export default CheckboxExample;
