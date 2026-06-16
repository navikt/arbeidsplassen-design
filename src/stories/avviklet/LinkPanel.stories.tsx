import type { Meta, StoryObj } from "@storybook/react";
import { LinkPanel } from "@navikt/ds-react";

const meta = {
    title: "Avviklet/LinkPanel",
    component: LinkPanel,
    tags: ["autodocs"],
} satisfies Meta<typeof LinkPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: {} as any,
    render: () => (
        // TODO: <LinkPanel href="#"><LinkPanel.Title>...</LinkPanel.Title></LinkPanel>
        <></>
    ),
};
