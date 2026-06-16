import type { Meta, StoryObj } from "@storybook/react";
import { HStack, Tag } from "@navikt/ds-react";

const meta = {
    title: "Aksel/Tag",
    component: Tag,
    tags: ["autodocs"],
    args: {
        variant: "outline",
        children: null,
        size: "medium",
        "data-color": "accent",
    },
    argTypes: {
        variant: { control: "select", options: ["outline", "moderate", "strong"] },
        size: { control: "select", options: ["medium", "small", "xsmall"] },
        children: { table: { disable: true } },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const dataColors = [
    "accent",
    "neutral",
    "brand-beige",
    "brand-blue",
    "brand-magenta",
    "info",
    "success",
    "warning",
    "danger",
    "meta-purple",
    "meta-lime",
] as const;

export const Default: Story = {
    render: (args) => (
        <HStack gap="space-4" wrap>
            {dataColors.map((color) => (
                <Tag key={color} {...args} data-color={color}>
                    {color}
                </Tag>
            ))}
        </HStack>
    ),
};

export const Accent: Story = {
    args: {
        "data-color": "accent",
        children: "Accent",
    },
};

export const Neutral: Story = {
    args: {
        "data-color": "neutral",
        children: "Neutral",
    },
};

export const BrandBeige: Story = {
    args: {
        "data-color": "brand-beige",
        children: "Brand Beige",
    },
};

export const BrandBlue: Story = {
    args: {
        "data-color": "brand-blue",
        children: "Brand Blue",
    },
};

export const BrandMagenta: Story = {
    args: {
        "data-color": "brand-magenta",
        children: "Brand Magenta",
    },
};

export const Info: Story = {
    args: {
        "data-color": "info",
        children: "Info",
    },
};

export const Success: Story = {
    args: {
        "data-color": "success",
        children: "Success",
    },
};

export const Warning: Story = {
    args: {
        "data-color": "warning",
        children: "Warning",
    },
};

export const Danger: Story = {
    args: {
        "data-color": "danger",
        children: "Danger",
    },
};

export const MetaPurple: Story = {
    args: {
        "data-color": "meta-purple",
        children: "Meta Purple",
    },
};

export const MetaLime: Story = {
    args: {
        "data-color": "meta-lime",
        children: "Meta Lime",
    },
};
