import { Heading, UNSAFE_Combobox } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const ComboBoxExample = () => {
  const countries = [
    "Norge",
    "Sverige",
    "Danmark",
    "Finland",
    "Island",
    "Storbritannia",
    "Tyskland",
    "Frankrike",
    "Spania",
    "Portugal",
    "Italia",
    "Hellas",
    "Kroatia",
    "Tyrkia",
  ];

  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const text = e.target.value;

    setValue(text);
    if (text.length > 0) {
      const found = countries.filter(
        (c) => c.toLowerCase().indexOf(text.toLowerCase()) !== -1
      );
      setFilteredOptions(found);
    } else {
      setFilteredOptions([]);
    }
  };

  const onToggleSelected = (option, isSelected) => {
    setValue(option);
    setFilteredOptions([]);
  };

  const onClear = () => {
    console.log("clear");
    setValue("");
    setFilteredOptions([]);
  };

  return (
    <Layout title="ComboBox">
      <Heading size="medium" level="2" spacing>
        Single Select
      </Heading>
      <UNSAFE_Combobox
        label="Hva er den aller kuleste Star Wars-filmen noensinne, helt objektivt?"
        className="mb-16"
        onChange={onChange}
        onToggleSelected={onToggleSelected}
        onClear={onClear}
        filteredOptions={filteredOptions}
        options={[]}
        value={value}
        isListOpen={filteredOptions.length > 0}
        toggleListButton={false}
      />

      <Heading size="medium" level="2" spacing>
        Multi Select with new values
      </Heading>
      <UNSAFE_Combobox
        allowNewValues
        label="Hva er dine favorittdrikker? Legg gjerne til flere alternativer."
        filteredOptions={filteredOptions}
        isMultiSelect
        className="mb-16"
      />
    </Layout>
  );
};

export default ComboBoxExample;
