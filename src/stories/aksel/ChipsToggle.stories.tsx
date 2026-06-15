import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import { useState } from "react";
import type { ComponentProps } from "react";
import { Button, Chips } from "@navikt/ds-react";
import { fn } from "storybook/test";

type ChipsToggleProps = ComponentProps<typeof Chips.Toggle>;
type ChipsRemovableProps = ComponentProps<typeof Chips.Removable>;

const meta: Meta = {
    title: "Aksel/Chips",
    component: Chips.Toggle,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["medium", "small"] },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipsToggle: Story = {
    args: { checkmark: true, "data-color": "neutral", children: "Toggle chip", selected: false, onClick: fn() },
    render: function Render(args) {
        const [{ selected }, updateArgs] = useArgs();
        return (
            <Chips.Toggle
                {...(args as ChipsToggleProps)}
                selected={selected}
                onClick={() => updateArgs({ selected: !selected })}
            />
        );
    },
};

export const ChipsRemovable: Story = {
    args: { "data-color": "neutral", children: "Removable chip", onDelete: fn() },
    render: function Render(args) {
        const [visible, setVisible] = useState(true);
        return visible ? (
            <Chips.Removable {...(args as ChipsRemovableProps)} onDelete={() => setVisible(false)} />
        ) : (
            <Button variant="tertiary" size="small" onClick={() => setVisible(true)}>
                Tilbakestill
            </Button>
        );
    },
};
