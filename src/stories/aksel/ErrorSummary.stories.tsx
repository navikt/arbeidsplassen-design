import type { Meta, StoryObj } from "@storybook/react";
import { ErrorSummary } from "@navikt/ds-react";

const meta = {
    title: "Aksel/ErrorSummary",
    component: ErrorSummary,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium"],
        },
        headingTag: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        },
        heading: { control: "text" },
    },
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        size: "medium",
        heading: "Du må fikse disse feilene før du kan sende inn søknad",
        headingTag: "h3",
    },
    render: (args) => (
        <ErrorSummary {...args}>
            <ErrorSummary.Item href="#1">Felt må fylles ut med alder</ErrorSummary.Item>
            <ErrorSummary.Item href="#2">Tekstfeltet må ha en godkjent e-mail</ErrorSummary.Item>
        </ErrorSummary>
    ),
};
