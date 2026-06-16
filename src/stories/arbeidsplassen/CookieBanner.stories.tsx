import type { Meta, StoryObj } from "@storybook/react";
import { CookieBanner } from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/CookieBanner",
    component: CookieBanner,
    tags: ["autodocs", "ai-generated"],
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headingLevel: "2",
        onClose: () => console.log("closed"),
    },
};
