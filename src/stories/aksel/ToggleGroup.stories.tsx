import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "@navikt/ds-react";
import { ClockDashedIcon, InboxIcon, PaperplaneIcon } from "@navikt/aksel-icons";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";

const meta = {
    title: "Aksel/ToggleGroup",
    component: ToggleGroup,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["medium", "small"] },
        "data-color": { control: "select", options: ["accent", "neutral"] },
        fill: { control: "boolean" },
        children: { table: { disable: true } },
    },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        size: "medium",
        value: "ulest",
        defaultValue: "ulest",
        onChange: fn(),
        label: "Innboks",
        "data-color": "accent",
        fill: false,
    },

    render: (args) => {
        const [, updateArgs] = useArgs();
        return (
            <ToggleGroup
                {...args}
                onChange={(value) => {
                    updateArgs({ value: value });
                    args.onChange(value);
                }}
            >
                <ToggleGroup.Item value="ulest">
                    <InboxIcon aria-hidden />
                    Ulest
                </ToggleGroup.Item>
                <ToggleGroup.Item value="lest">
                    <ClockDashedIcon aria-hidden />
                    Leste
                </ToggleGroup.Item>
                <ToggleGroup.Item value="sendt">
                    <PaperplaneIcon aria-hidden />
                    Sendt
                </ToggleGroup.Item>
            </ToggleGroup>
        );
    },
};
