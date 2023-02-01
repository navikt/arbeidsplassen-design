import { Print } from "@navikt/ds-icons";
import { Button, Tooltip } from "@navikt/ds-react";

const TooltipExample = () => {
  return (
    <Tooltip content="Skriv ut dokument">
      <Button icon={<Print title="demo knapp" />} />
    </Tooltip>
  );
};

export default TooltipExample;
