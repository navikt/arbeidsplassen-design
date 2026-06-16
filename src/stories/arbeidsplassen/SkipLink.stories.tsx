import type { Meta, StoryObj } from "@storybook/react";
import { SkipLink } from "@navikt/arbeidsplassen-react";
import { BodyLong } from "@navikt/ds-react";

const meta = {
    title: "Arbeidsplassen/SkipLink",
    component: SkipLink,
    tags: ["autodocs", "ai-generated"],
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <>
            <SkipLink />
            <BodyLong>
                Skip link vises øverst i venstre hjørne når du bruker tabulator. Sørg for å plassere skip link først
                i tabulator-rekkefølgen.
            </BodyLong>
        </>
    ),
};
