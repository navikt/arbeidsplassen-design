import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { NotFound } from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/NotFound",
    component: NotFound,
    tags: ["autodocs", "ai-generated"],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("heading", { name: /fant ikke siden/i })).toBeVisible();
    },
};
