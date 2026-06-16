import type { Meta, StoryObj } from "@storybook/react";
import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Modal",
    component: Modal,
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Skal erstattes av Dialog
 */
export const Default: Story = {
    args: { children: null, "aria-label": "Eksempel modal", open: false, onClose: fn() },
    render: function Render(args) {
        const [{ open }, updateArgs] = useArgs();

        const openModal = () => updateArgs({ open: true });
        const closeModal = () => updateArgs({ open: false });

        return (
            <>
                <Button onClick={openModal}>Åpne modal</Button>
                <Modal
                    {...args}
                    open={open}
                    onClose={(event) => {
                        closeModal();
                        args.onClose?.(event);
                    }}
                >
                    <Modal.Header>
                        <Heading level="1" size="large">
                            Laborum proident id ullamco
                        </Heading>
                    </Modal.Header>

                    <Modal.Body>
                        <BodyLong spacing>
                            Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui incididunt dolor do ad ut.
                            Incididunt eiusmod nostrud deserunt duis laborum. Proident aute culpa qui nostrud velit
                            adipisicing minim. Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
                            exercitation non minim minim pariatur sunt laborum ipsum. Exercitation nostrud est laborum
                            magna non non aliqua qui esse.
                        </BodyLong>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={closeModal}>
                            Primær
                        </Button>
                        <Button variant="secondary" onClick={closeModal}>
                            Sekundær
                        </Button>
                        <Button variant="tertiary" onClick={closeModal}>
                            Tertiær
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    },
};
