import {
  Checkbox,
  CheckboxGroup,
  Heading,
  Radio,
  RadioGroup,
} from "@navikt/ds-react";
import Layout from "../examples/Layout";

const handleChange = (val) => console.log(val);

function Template({ title, ...args }) {
  return (
    <div className="mb-4">
      <Heading size="medium" level="2" spacing>
        {title}
      </Heading>
      <CheckboxGroup
        legend="Velg arbeidssted"
        description="Du kan velge flere steder om du vil"
        onChange={(val) => handleChange(val)}
        defaultValue={["alta"]}
        {...args}
      >
        <Checkbox value="alta">Alta</Checkbox>
        <Checkbox value="bardufoss">Bardufoss</Checkbox>
        <Checkbox value="bergen">Bergen</Checkbox>
        <Checkbox value="bodø" indeterminate>
          Bodø (indeterminate)
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}

const CheckboxExample = () => {
  const handleChange = (val) => console.log(val);

  return (
    <Layout title="Checkbox">
      <Template title="Standard" />
      <Template title="Error" error="Du må velge minst et valg" />
      <Template title="Disabled" disabled />
      <Template title="Read only" readOnly />
    </Layout>
  );
};

export default CheckboxExample;
