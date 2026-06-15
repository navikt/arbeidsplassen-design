import type { Meta, StoryObj } from "@storybook/react";
import { ReadMore } from "@navikt/ds-react";

const meta = {
    title: "Aksel/ReadMore",
    component: ReadMore,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        variant: { control: "select", options: ["moderate", "ghost"] },
    },
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        header: "Les mer",
        size: "medium",
        variant: "ghost",
        children:
            "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
    },
};
