import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "@navikt/ds-react";

const meta = {
    title: "Aksel/CopyButton",
    component: CopyButton,
    tags: ["autodocs"],
    argTypes: {
        "data-color": { control: "select", options: ["neutral", "accent"] },
    },
    args: {
        copyText: "3.14",
        "data-color": "neutral",
    },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MedTekst: Story = {
    args: { text: "Kopier" },
};
