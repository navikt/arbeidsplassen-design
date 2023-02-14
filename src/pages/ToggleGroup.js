import { ToggleGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { Delete, People } from "@navikt/ds-icons";

const ToggleGroupExample = () => {
  return (
    <Layout title="ToggleGroup">
      <ToggleGroup defaultValue="lest" onChange={console.log}>
        <ToggleGroup.Item value="ulest">
          <People />
          Ulest
        </ToggleGroup.Item>
        <ToggleGroup.Item value="lest">
          <Delete />
          Leste
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <People />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
    </Layout>
  );
};

export default ToggleGroupExample;
