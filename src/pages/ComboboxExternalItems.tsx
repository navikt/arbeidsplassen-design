import { useState } from "react";
import { ComboboxExternalItems } from "@navikt/arbeidsplassen-react";
import type { ComboboxItem } from "@navikt/arbeidsplassen-react";
import { PLACEHOLDER_INPUT_OPTIONS } from "@/examples/placeholders";
import Layout from "@/examples/Layout";

export default function ComboboxExternalItemsExample() {
    const [items, setItems] = useState<string[]>(PLACEHOLDER_INPUT_OPTIONS);

    const removeItem = (val: ComboboxItem) => {
        const valStr = typeof val === "string" ? val : val.value;
        setItems((prev) => prev.filter((y) => y !== valStr));
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
}
