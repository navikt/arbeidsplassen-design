import { Select } from "@navikt/ds-react";

const SelectExample = () => {
  return (
    <Select label="Hvilket land har du bosted i?">
      <option value="">Velg land</option>
      <option value="norge">Norge</option>
      <option value="sverige">Sverige</option>
      <option value="danmark">Danmark</option>
    </Select>
  );
};

export default SelectExample;
