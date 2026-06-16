import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import {
    PLACEHOLDER_INPUT_DESCRIPTION,
    PLACEHOLDER_INPUT_LABEL,
    PLACEHOLDER_INPUT_OPTIONS,
} from "../../constants/placeholders";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Checkbox",
    component: CheckboxGroup,
    tags: ["autodocs"],
    argTypes: {
        error: { control: "text" },
        disabled: { control: "boolean" },
        readOnly: { control: "boolean" },
        onChange: {
            action: "onOpenChange",
        },
    },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        legend: PLACEHOLDER_INPUT_LABEL,
        description: PLACEHOLDER_INPUT_DESCRIPTION,
        defaultValue: ["Brød"],
        disabled: false,
        readOnly: false,
        onChange: fn(),
    },
    render: (args) => {
        return (
            <CheckboxGroup {...args}>
                {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                    <Checkbox value={option} key={option}>
                        {option}
                    </Checkbox>
                ))}
                <Checkbox value="Paprika" indeterminate>
                    Paprika (indeterminate)
                </Checkbox>
            </CheckboxGroup>
        );
    },
};
