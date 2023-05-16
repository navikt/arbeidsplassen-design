import { ToggleGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import {
  ClockDashedIcon,
  InboxIcon,
  PaperplaneIcon,
} from "@navikt/aksel-icons";

const ToggleGroupExample = () => {
  return (
    <Layout title="ToggleGroup">
      <ToggleGroup defaultValue="lest" onChange={console.log}>
        <ToggleGroup.Item value="ulest">
          <InboxIcon />
          Ulest
        </ToggleGroup.Item>
        <ToggleGroup.Item value="lest">
          <ClockDashedIcon />
          Leste
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <PaperplaneIcon />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
    </Layout>
  );
};

export default ToggleGroupExample;
