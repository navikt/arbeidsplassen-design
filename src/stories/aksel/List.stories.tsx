import type { Meta, StoryObj } from "@storybook/react";
import { List } from "@navikt/ds-react";
import { PLACEHOLDER_BLOCK, PLACEHOLDER_PARAGRAPH } from "../../constants/placeholders";

const meta = {
    title: "Aksel/List",
    component: List,
    tags: ["autodocs"],
    argTypes: {
        children: { table: { disable: true } },
        size: { control: "select", options: ["small", "medium", "large"] },
        as: { control: "select", options: ["ul", "ol"] },
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: null },
    render: (args) => (
        <List {...args}>
            <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
            <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
            <List.Item>{PLACEHOLDER_BLOCK}</List.Item>
        </List>
    ),
};
