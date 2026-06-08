import { Button, Tooltip } from "@navikt/ds-react";
import Layout from "@/examples/Layout";
import { PrinterSmallIcon } from "@navikt/aksel-icons";

export default function TooltipExample() {
    return (
        <Layout title="ToolTip">
            <Tooltip content="Skriv ut dokument">
                <Button icon={<PrinterSmallIcon title="demo knapp" />} />
            </Tooltip>
        </Layout>
    );
}
