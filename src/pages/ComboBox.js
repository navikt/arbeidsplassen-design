import { Heading, UNSAFE_Combobox } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const ComboBoxExample = () => {
  const initialOptions = [
    "tea",
    "coffee",
    "hot chocolate",
    "lemonade",
    "orange juice",
    "apple juice",
    "smoothie",
    "milk",
    "water",
    "soda",
    "beer",
    "wine",
  ];

  return (
    <Layout title="ComboBox">
      <Heading size="medium" level="2" spacing>
        Combobox
      </Heading>
      <UNSAFE_Combobox
        allowNewValues
        label="Hva er dine favorittdrikker? Legg gjerne til flere alternativer."
        options={initialOptions}
        isMultiSelect
      />
    </Layout>
  );
};

export default ComboBoxExample;
