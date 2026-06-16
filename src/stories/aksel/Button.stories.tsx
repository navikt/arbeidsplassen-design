import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@navikt/ds-react";
import { TrashIcon } from "@navikt/aksel-icons";

const meta = {
    title: "Aksel/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/design/wF4Pxarz2zhPQgoT9cRlk5/Designsystem-AP-2.0?node-id=1120-2129&t=kw9hNchzC614GrPD-4",
        },
    },
    argTypes: {
        variant: {
            control: "select",
            options: [
                "primary",
                "primary-neutral",
                "secondary",
                "secondary-neutral",
                "tertiary",
                "tertiary-neutral",
                "danger",
            ],
        },
        size: {
            control: "select",
            options: ["medium", "small", "xsmall"],
        },
        loading: { control: "boolean" },
    },
    args: {
        as: "button",
        size: "medium",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/design/wF4Pxarz2zhPQgoT9cRlk5/Designsystem-AP-2.0?node-id=1120-2099&m=dev",
        },
    },
    args: {
        children: "Button",
        variant: "primary",
        loading: false,
        icon: <TrashIcon aria-hidden />,
    },
};

export const UtenIkon: Story = {
    args: {
        children: "Button",
        variant: "primary",
    },
};

export const Danger: Story = {
    args: {
        children: "Slett",
        variant: "danger",
        icon: <TrashIcon aria-hidden />,
    },
};
