import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@navikt/ds-react";

const meta = {
    title: "Avviklet/Alert",
    component: Alert,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["error", "warning", "info", "success"],
        },
        size: {
            control: "select",
            options: ["medium", "small"],
        },
        fullWidth: { control: "boolean" },
        inline: { control: "boolean" },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "error",
        size: "medium",
        children: "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet.",
    },
};
