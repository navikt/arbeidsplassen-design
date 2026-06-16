import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "@navikt/ds-react";

const meta = {
    title: "Aksel/Search",
    component: Search,
    tags: ["autodocs"],
    argTypes: {
        variant: { control: "select", options: ["primary", "secondary", "simple"] },
        clearButton: { control: "boolean" },
        disabled: { control: "boolean" },
        hideLabel: { control: "boolean" },
        description: { control: "text" },
        error: { control: "text" },
        size: { control: "select", options: ["small", "medium"] },
    },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Søk",
        hideLabel: false,
        clearButton: true,
        disabled: false,
        description: "",
        error: "",
    },
};
