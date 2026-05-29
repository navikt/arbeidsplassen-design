import { Tabs } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "@/examples/Layout";
import { ClockDashedIcon, InboxIcon, PaperplaneIcon } from "@navikt/aksel-icons";

export default function TabsExample() {
    const [state, setState] = useState("logg");

    return (
        <Layout title="Tabs">
            <Tabs value={state} onChange={setState}>
                <Tabs.List>
                    <Tabs.Tab value="logg" label="Logg" icon={<ClockDashedIcon title="historielogg" />} />
                    <Tabs.Tab value="inbox" label="Inbox" icon={<InboxIcon title="inbox" />} />
                    <Tabs.Tab value="sendt" label="Sendt" icon={<PaperplaneIcon title="sendt" />} />
                </Tabs.List>
                <Tabs.Panel value="logg">{null}</Tabs.Panel>
                <Tabs.Panel value="inbox">{null}</Tabs.Panel>
                <Tabs.Panel value="sendt">{null}</Tabs.Panel>
            </Tabs>
        </Layout>
    );
}
