import { ToggleGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import UsersIcon from "../packages/arbeidsplassen-react/Icons/feather/UsersIcon";
import TrashIcon from "../packages/arbeidsplassen-react/Icons/feather/TrashIcon";

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
