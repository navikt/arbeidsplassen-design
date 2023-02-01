import { Button, Popover } from "@navikt/ds-react";
import { useRef, useState } from "react";

const PopoverExample = () => {
  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);
  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpenState(true)}>
        Åpne popover
      </Button>
      <Popover
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
      >
        <Popover.Content>Innhold her!</Popover.Content>
      </Popover>
    </>
  );
};

export default PopoverExample;
