import React, { useState } from "react";
import { Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { ComboboxExternalItems } from "@navikt/arbeidsplassen-react/ComboboxExternalItems";

const ComboboxExternalItemsExample = () => {
  const [items, setItems] = useState(["tea", "coffee", "juice"]);

  const removeItem = (val) => {
    setItems(() =>
      val.length === 1 ? options : items.filter((y) => y !== val)
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
    </Layout>
  );
};

export default ComboboxExternalItemsExample;
