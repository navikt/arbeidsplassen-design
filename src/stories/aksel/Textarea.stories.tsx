import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@navikt/ds-react";

const meta = {
    title: "Aksel/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    argTypes: {
        error: { control: "text" },
        maxLength: { control: "number" },
        disabled: { control: "boolean" },
        readOnly: { control: "boolean" },
        resize: { control: "boolean" },
        size: { control: "select", options: ["small", "medium"] },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Beskrivelse",
        description: "Beskriv deg selv",
        error: "",
        disabled: false,
        readOnly: false,
        size: "medium",
        maxLength: 0,
        resize: false,
    },
};
