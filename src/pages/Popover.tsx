import { Button, Popover } from "@navikt/ds-react";
import { useRef, useState } from "react";
import Layout from "@/examples/Layout";

export default function PopoverExample() {
    const buttonRef = useRef(null);
    const [openState, setOpenState] = useState(false);
    return (
        <Layout title="Popover">
            <Button ref={buttonRef} onClick={() => setOpenState(true)}>
                Åpne popover
            </Button>
            <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
                <Popover.Content>Innhold her!</Popover.Content>
            </Popover>
        </Layout>
    );
}
