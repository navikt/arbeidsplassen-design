import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Header } from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/Header",
    component: Header,
    tags: ["autodocs", "ai-generated"],
    argTypes: {
        variant: {
            control: "select",
            options: ["person", "company"],
        },
        authenticationStatus: {
            control: "select",
            options: ["unknown", "is-authenticated", "not-authenticated"],
        },
        muligheterAccessStatus: {
            control: "select",
            options: ["has-access", "no-access"],
        },
        active: {
            control: "select",
            options: ["ledige-stillinger", "ung", "sommerjobb", "stillingsannonser", "muligheter"],
        },
    },
    args: {
        onLogin: () => console.log("login"),
        onLogout: () => console.log("logout"),
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonInnlogget: Story = {
    args: {
        variant: "person",
        authenticationStatus: "is-authenticated",
        muligheterAccessStatus: "no-access",
        active: "ledige-stillinger",
    },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("navigation", { name: /Hovedmeny/i })).toBeVisible();
    },
};

export const PersonUinnlogget: Story = {
    args: {
        variant: "person",
        authenticationStatus: "not-authenticated",
        muligheterAccessStatus: "no-access",
        active: "ledige-stillinger",
    },
};

export const Company: Story = {
    args: {
        variant: "company",
        authenticationStatus: "is-authenticated",
        muligheterAccessStatus: "no-access",
        active: "stillingsannonser",
    },
};

export const MedMuligheterTilgang: Story = {
    args: {
        variant: "person",
        authenticationStatus: "is-authenticated",
        muligheterAccessStatus: "has-access",
        active: "muligheter",
    },
};
