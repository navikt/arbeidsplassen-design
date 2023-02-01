import { ToggleGroup } from "@navikt/ds-react";
import Heart from "../components/icons/Heart";
import Trash from "../components/icons/Trash";

const ToggleGroupExample = () => {
  return (
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
  );
};

export default ToggleGroupExample;
