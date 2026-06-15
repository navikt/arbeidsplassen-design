import type { Meta, StoryObj } from "@storybook/react";
import { ComboboxExternalItems, ComboboxItem } from "@navikt/arbeidsplassen-react";
import { PLACEHOLDER_INPUT_OPTIONS } from "../../constants/placeholders";
import { useState } from "react";
import { fn } from "storybook/test";

const meta = {
    title: "Arbeidsplassen/ComboboxExternalItems",
    component: ComboboxExternalItems,
    tags: ["autodocs", "ai-generated"],
} satisfies Meta<typeof ComboboxExternalItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { removeComboboxItem: fn(), itemsLeadingText: "Du har valgt" },
    render: (args) => {
        const [items, setItems] = useState<string[]>(PLACEHOLDER_INPUT_OPTIONS);

        const removeItem = (val: ComboboxItem) => {
            const valStr = typeof val === "string" ? val : val.value;
            setItems((prev) => prev.filter((y) => y !== valStr));
        };
        return (
            <ComboboxExternalItems
                {...args}
                noItemsText="Ingenting valgt"
                items={items}
                removeComboboxItem={removeItem}
            />
        );
    },
};
