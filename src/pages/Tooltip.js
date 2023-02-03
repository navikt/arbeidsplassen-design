import { Print } from "@navikt/ds-icons";
import { Button, Tooltip } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const TooltipExample = () => {
  return (
    <Layout title="ToolTip">
      <Tooltip content="Skriv ut dokument">
        <Button icon={<Print title="demo knapp" />} />
      </Tooltip>
    </Layout>
  );
};

export default TooltipExample;
