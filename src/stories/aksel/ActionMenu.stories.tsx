import type { Meta, StoryObj } from "@storybook/react";
import { ActionMenu, Button } from "@navikt/ds-react";
import { ChevronDownIcon } from "@navikt/aksel-icons";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/ActionMenu",
    component: ActionMenu,
    argTypes: {
        onOpenChange: {
            action: "onOpenChange",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { open: false, onOpenChange: fn() },
    render: (args) => {
        const [{ open }, updateArgs] = useArgs();

        function onOpenChange() {
            updateArgs({ open: !open });
            args.onOpenChange?.(!open);
        }
        return (
            <ActionMenu {...args} onOpenChange={onOpenChange} open={args.open}>
                <ActionMenu.Trigger>
                    <Button
                        data-color="neutral"
                        variant="secondary"
                        icon={<ChevronDownIcon aria-hidden />}
                        iconPosition="right"
                    >
                        Meny
                    </Button>
                </ActionMenu.Trigger>
                <ActionMenu.Content>
                    <ActionMenu.Group label="Systemer og oppslagsverk">
                        <ActionMenu.Item onSelect={console.info}>A-inntekt</ActionMenu.Item>
                        <ActionMenu.Item onSelect={console.info}>Aa-registeret</ActionMenu.Item>
                        <ActionMenu.Item onSelect={console.info}>Gosys</ActionMenu.Item>
                        <ActionMenu.Item onSelect={console.info}>Modia Sykefraværsoppfølging</ActionMenu.Item>
                        <ActionMenu.Item onSelect={console.info}>Modia Personoversikt</ActionMenu.Item>
                    </ActionMenu.Group>
                </ActionMenu.Content>
            </ActionMenu>
        );
    },
};
