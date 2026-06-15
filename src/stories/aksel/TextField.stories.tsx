import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@navikt/ds-react";

const meta = {
    title: "Aksel/TextField",
    component: TextField,
    tags: ["autodocs"],
    argTypes: {
        error: { control: "text" },
        disabled: { control: "boolean" },
        readOnly: { control: "boolean" },
        size: { control: "select", options: ["small", "medium"] },
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Velg matvare",
        description: "Velg det som smaker best",
        error: "",
        disabled: false,
        readOnly: false,
        size: "medium",
    },
};
