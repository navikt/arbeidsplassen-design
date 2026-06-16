import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/LoginPage",
    component: LoginPage,
    tags: ["autodocs", "ai-generated"],
    argTypes: {
        link: { control: "text" },
    },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        link: "https://arbeidsplassen.nav.no",
    },
};
