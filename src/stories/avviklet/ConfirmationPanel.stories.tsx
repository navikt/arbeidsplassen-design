import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationPanel } from "@navikt/ds-react";

const meta = {
    title: "Avviklet/ConfirmationPanel",
    component: ConfirmationPanel,
    tags: ["autodocs"],
} satisfies Meta<typeof ConfirmationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: {} as any,
    render: () => (
        // TODO
        <></>
    ),
};
