import type { Meta, StoryObj } from "@storybook/react";
import { Ingress } from "@navikt/ds-react";

const meta = {
    title: "Avviklet/Ingress",
    component: Ingress,
    tags: ["autodocs"],
} satisfies Meta<typeof Ingress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: "p",
        children: "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet.",
    },
};
