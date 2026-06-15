import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Footer } from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/Footer",
    component: Footer,
    tags: ["ai-generated"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("heading", { name: /om oss/i })).toBeVisible();
    },
};

export const Norwegian: Story = { args: { lang: "nb" } };

export const English: Story = { args: { lang: "en" } };

// Asserts that arbeidsplassen-theme.css loaded: arb-brand-green-300 = #c1f3db = rgb(193, 243, 219)
export const CssCheck: Story = {
    play: async ({ canvas }) => {
        const footer = canvas.getByRole("contentinfo");
        await expect(getComputedStyle(footer).backgroundColor).toBe("rgb(193, 243, 219)");
    },
};
