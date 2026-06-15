import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { useId, useRef } from "react";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Popover",
    component: Popover,
    tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: false,
        children: null,
        anchorEl: null,
        onClose: fn(),
    },
    render: (args) => {
        const [{ open }, updateArgs] = useArgs();
        const buttonRef = useRef(null);
        const popoverId = useId();

        return (
            <>
                <Button
                    ref={buttonRef}
                    onClick={() => updateArgs({ open: !open })}
                    aria-expanded={open}
                    aria-controls={open ? popoverId : undefined}
                >
                    Åpne popover
                </Button>

                <Popover open={open} onClose={() => { updateArgs({ open: false }); args.onClose(); }} anchorEl={buttonRef.current} id={popoverId}>
                    <Popover.Content>Innhold her!</Popover.Content>
                </Popover>
            </>
        );
    },
};
