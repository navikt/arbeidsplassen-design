import { Button, Tooltip } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { PrinterSmallIcon } from "@navikt/aksel-icons";

const TooltipExample = () => {
    return (
        <Layout title="ToolTip">
            <Tooltip content="Skriv ut dokument">
                <Button icon={<PrinterSmallIcon title="demo knapp" />} />
            </Tooltip>
        </Layout>
    );
};

export default TooltipExample;
