import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@navikt/ds-react";
import { PLACEHOLDER_INPUT_LABEL, PLACEHOLDER_INPUT_OPTIONS } from "../../constants/placeholders";

const meta = {
    title: "Aksel/Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        disabled: { control: "boolean" },
        hideLabel: { control: "boolean" },
        description: { control: "text" },
        error: { control: "text" },
        size: { control: "select", options: ["small", "medium"] },
        children: { table: { disable: true } },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: PLACEHOLDER_INPUT_LABEL,
        children: null,
        hideLabel: false,
        disabled: false,
        description: "",
        error: "",
    },
    render: (args) => (
        <Select {...args}>
            <option value="">Velg matvare</option>
            {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </Select>
    ),
};
