import type { Meta, StoryObj } from "@storybook/react";
import { UNSAFE_Combobox } from "@navikt/ds-react";

const meta = {
    title: "Aksel/ComboBox",
    component: UNSAFE_Combobox,
    tags: ["autodocs"],
} satisfies Meta<typeof UNSAFE_Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Velg matvare",
        description: "Velg det som smaker best",
        options: ["Brød", "Melk", "Smør", "Ost"],
        isMultiSelect: true,
        allowNewValues: true,
    },
};
