import React, { useState } from "react";
import Layout from "../examples/Layout";
import { ComboboxExternalItems } from "@navikt/arbeidsplassen-react";
import { PLACEHOLDER_INPUT_OPTIONS } from "@/examples/placeholders";

const ComboboxExternalItemsExample = () => {
    const [items, setItems] = useState(PLACEHOLDER_INPUT_OPTIONS);

    const removeItem = (val) => {
        setItems(() => (val.length === 1 ? options : items.filter((y) => y !== val)));
    };

    return (
        <Layout title="ComboboxExternalItems">
            <ComboboxExternalItems
                noItemsText="Ingenting valgt"
                items={items}
                itemsLeadingText="Du har valgt"
                removeComboboxItem={removeItem}
            ></ComboboxExternalItems>
        </Layout>
    );
};

export default ComboboxExternalItemsExample;
