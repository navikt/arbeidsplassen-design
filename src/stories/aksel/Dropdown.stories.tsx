import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown, Link } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    argTypes: {
        defaultOpen: { control: "boolean", defaultValue: false },
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: null, defaultOpen: false, open: false, onOpenChange: fn() },
    render: (args) => {
        const [{ open }, updateArgs] = useArgs();
        function onChange() {
            updateArgs({ open: !open });
            args.onOpenChange?.(!open);
        }
        return (
            <Dropdown {...args} onOpenChange={onChange}>
                <Button as={Dropdown.Toggle}>Toggle</Button>

                <Dropdown.Menu>
                    <Dropdown.Menu.GroupedList>
                        <Dropdown.Menu.GroupedList.Heading>Systemer og oppslagsverk</Dropdown.Menu.GroupedList.Heading>
                        <Dropdown.Menu.GroupedList.Item onClick={() => {}}>Gosys</Dropdown.Menu.GroupedList.Item>

                        <Dropdown.Menu.GroupedList.Item as="a" href="https://arbeidsplassen.nav.no/om-arbeidsplassen">
                            Om arbeidsplassen.no
                        </Dropdown.Menu.GroupedList.Item>
                    </Dropdown.Menu.GroupedList>
                    <Dropdown.Menu.Divider />

                    <Dropdown.Menu.List>
                        <Dropdown.Menu.List.Item as={Link} href="https://arbeidsplassen.nav.no/kontakt">
                            Kontakt
                        </Dropdown.Menu.List.Item>

                        <Dropdown.Menu.List.Item as={Link} href="https://arbeidsplassen.nav.no/kontakt" target="_blank">
                            Hjelp (åpner i en ny fane)
                        </Dropdown.Menu.List.Item>
                    </Dropdown.Menu.List>
                </Dropdown.Menu>
            </Dropdown>
        );
    },
};
