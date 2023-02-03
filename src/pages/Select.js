import { Select } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const SelectExample = () => {
  return (
    <Layout title="Select">
      <Select label="Hvilket land har du bosted i?">
        <option value="">Velg land</option>
        <option value="norge">Norge</option>
        <option value="sverige">Sverige</option>
        <option value="danmark">Danmark</option>
      </Select>
    </Layout>
  );
};

export default SelectExample;
