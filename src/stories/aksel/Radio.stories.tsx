import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import {
    PLACEHOLDER_INPUT_DESCRIPTION,
    PLACEHOLDER_INPUT_ERROR,
    PLACEHOLDER_INPUT_LABEL,
    PLACEHOLDER_INPUT_OPTIONS,
} from "../../constants/placeholders";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Radio",
    component: RadioGroup,
    tags: ["autodocs"],
    argTypes: {
        error: { control: "boolean" },
        disabled: { control: "boolean" },
        readOnly: { control: "boolean" },
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        legend: PLACEHOLDER_INPUT_LABEL,
        description: PLACEHOLDER_INPUT_DESCRIPTION,
        error: "",
        disabled: false,
        readOnly: false,
        defaultValue: "Brød",
        children: null,
        onChange: fn(),
    },
    argTypes: {
        error: { control: "text" },
        children: { table: { disable: true } },
    },
    render: (args) => {
        return (
            <RadioGroup
                {...args}
                onChange={(val) => {
                    args.onChange?.(val);
                }}
            >
                {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                    <Radio key={option} value={option}>{option}</Radio>
                ))}
            </RadioGroup>
        );
    },
};
