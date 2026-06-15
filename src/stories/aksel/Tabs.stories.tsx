import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@navikt/ds-react";
import { ClockDashedIcon, InboxIcon, PaperplaneIcon } from "@navikt/aksel-icons";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";

const meta = {
    title: "Aksel/Tabs",
    component: Tabs,
    tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "logg",
        children: null,
        onChange: fn(),
        size: "medium",
        selectionFollowsFocus: false,
        iconPosition: "left",
        loop: false,
        fill: false,
    },
    argTypes: {
        size: { control: "select", options: ["medium", "small"] },
        iconPosition: { control: "select", options: ["left", "top"] },
        selectionFollowsFocus: { control: "boolean" },
        loop: { control: "boolean" },
        fill: { control: "boolean" },
        children: { table: { disable: true } },
    },
    render: (args) => {
        const [, updateArgs] = useArgs();
        return (
            <Tabs
                {...args}
                onChange={(value) => {
                    updateArgs({ value: value });
                    args.onChange?.(value);
                }}
            >
                <Tabs.List>
                    <Tabs.Tab value="logg" label="Logg" icon={<ClockDashedIcon title="historielogg" />} />
                    <Tabs.Tab value="inbox" label="Inbox" icon={<InboxIcon title="inbox" />} />
                    <Tabs.Tab value="sendt" label="Sendt" icon={<PaperplaneIcon title="sendt" />} />
                </Tabs.List>
                <Tabs.Panel value="logg">Logg-tabb</Tabs.Panel>
                <Tabs.Panel value="inbox">Inbox-tab</Tabs.Panel>
                <Tabs.Panel value="sendt">Sendt-tab</Tabs.Panel>
            </Tabs>
        );
    },
};
