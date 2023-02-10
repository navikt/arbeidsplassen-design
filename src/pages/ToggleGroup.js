import { ToggleGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import UsersIcon from "../common/icons/feather/UsersIcon";
import TrashIcon from "../common/icons/feather/TrashIcon";

const ToggleGroupExample = () => {
  return (
    <Layout title="ToggleGroup">
      <ToggleGroup defaultValue="lest" onChange={console.log}>
        <ToggleGroup.Item value="ulest">
          <UsersIcon />
          Ulest
        </ToggleGroup.Item>
        <ToggleGroup.Item value="lest">
          <TrashIcon />
          Leste
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <UsersIcon />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
    </Layout>
  );
};

export default ToggleGroupExample;
