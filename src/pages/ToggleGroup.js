import { ToggleGroup } from "@navikt/ds-react";
import Heart from "../examples/icons/Heart";
import Trash from "../examples/icons/Trash";
import Layout from "../examples/Layout";

const ToggleGroupExample = () => {
  return (
    <Layout title="ToggleGroup">
      <ToggleGroup defaultValue="lest" onChange={console.log}>
        <ToggleGroup.Item value="ulest">
          <Heart />
          Ulest
        </ToggleGroup.Item>
        <ToggleGroup.Item value="lest">
          <Trash />
          Leste
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <Heart />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
    </Layout>
  );
};

export default ToggleGroupExample;
