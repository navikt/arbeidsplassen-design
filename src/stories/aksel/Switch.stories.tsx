import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@navikt/ds-react";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";

const meta = {
    title: "Aksel/Switch",
    component: Switch,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["medium", "small"] },
        position: { control: "select", options: ["left", "right"] },
        checked: { control: "boolean" },
        hideLabel: { control: "boolean" },
        description: { control: "text" },
        loading: { control: "boolean" },
        readOnly: { control: "boolean" },
        disabled: { control: "boolean" },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
        loading: false,
        size: "medium",
        position: "left",
        readOnly: false,
        children: "Dark mode",
        hideLabel: false,
        description: "",
        disabled: false,
        onChange: fn(),
    },
    render: (args) => {
        const [{ checked }, updateArgs] = useArgs();
        return (
            <Switch
                {...args}
                onChange={(event) => {
                    updateArgs({ checked: !checked });
                    args.onChange?.(event);
                }}
            />
        );
    },
};
