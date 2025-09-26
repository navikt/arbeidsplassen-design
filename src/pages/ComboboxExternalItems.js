import React, { useState } from "react";
import { Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { ComboboxExternalItems } from "@navikt/arbeidsplassen-react";

const ComboboxExternalItemsExample = () => {
  const [items, setItems] = useState(["tea", "coffee", "juice"]);
  const [itemsObject, setItemsObject] = useState([
    {
      label: "Deltid",
      value: "extent-Deltid",
    },
    {
      label: "Heltid",
      value: "extent-Heltid",
    },
  ]);

  const removeItem = (val) => {
    setItems(() =>
      val.length === 1 ? options : items.filter((y) => y !== val)
    );
  };

  const removeObjectItem = (val) => {
    setItemsObject(() =>
      val.length === 1
        ? options
        : itemsObject.filter((y) => y.value !== val.value)
    );
  };

  return (
    <Layout title="ComboboxExternalItemsExample">
      <Heading size="medium" level="2" spacing>
        ComboboxExternalItems no items
      </Heading>
      <ComboboxExternalItems
        noItemsText="No items"
        itemsLeadingText="You have chosen"
        removeComboboxItem={removeItem}
      ></ComboboxExternalItems>

      <Heading size="medium" level="2" spacing>
        ComboboxExternalItems you have chosen items
      </Heading>
      <ComboboxExternalItems
        noItemsText="No items"
        items={items}
        itemsLeadingText="You have chosen"
        removeComboboxItem={removeItem}
      ></ComboboxExternalItems>

      <Heading size="medium" level="2" spacing>
        ComboboxExternalItems you have chosen items as objects
      </Heading>
      <ComboboxExternalItems
        noItemsText="No items"
        items={itemsObject}
        itemsLeadingText="You have chosen object items"
        removeComboboxItem={removeObjectItem}
      ></ComboboxExternalItems>
    </Layout>
  );
};

export default ComboboxExternalItemsExample;
