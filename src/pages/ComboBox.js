import { Heading, UNSAFE_Combobox } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const ComboBoxExample = () => {
  const initialOptions = [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "The Phantom Menace",
    "Attack of the Clones",
    "Revenge of the Sith",
    "The Force Awakens",
    "Rogue One",
    "The Last Jedi",
    "Solo",
    "The Rise of Skywalker",
  ];

  return (
    <Layout title="ComboBox">
      <Heading size="medium" level="2" spacing>
        Single Select
      </Heading>
      <UNSAFE_Combobox
        label="Hva er den aller kuleste Star Wars-filmen noensinne, helt objektivt?"
        options={initialOptions}
        shouldAutocomplete={true}
        className="mb-2"
      />

      <Heading size="medium" level="2" spacing>
        Multi Select with new values
      </Heading>
      <UNSAFE_Combobox
        allowNewValues
        label="Hva er dine favorittdrikker? Legg gjerne til flere alternativer."
        options={initialOptions}
        isMultiSelect
        className="mb-2"
      />
    </Layout>
  );
};

export default ComboBoxExample;
