import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@navikt/ds-react";
import { PrinterSmallIcon } from "@navikt/aksel-icons";

const meta = {
    title: "Aksel/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        children: { table: { disable: true } },
        content: { control: "text" },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: <></>, content: "Skriv ut dokument" },
    render: (args) => (
        <Tooltip content={args.content}>
            <Button icon={<PrinterSmallIcon title="demo knapp" />} />
        </Tooltip>
    ),
};
