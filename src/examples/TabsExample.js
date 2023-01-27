import { Email, Historic, Send } from "@navikt/ds-icons";
import { Tabs } from "@navikt/ds-react";
import { useState } from "react";

const TabsExample = () => {
    const [state, setState] = useState("logg");

    return (
        <Tabs value={state} onChange={setState}>
            <Tabs.List>
                <Tabs.Tab
                    value="logg"
                    label="Logg"
                    icon={<Historic title="historielogg" />}
                />
                <Tabs.Tab value="inbox" label="Inbox" icon={<Email title="inbox" />} />
                <Tabs.Tab value="sendt" label="Sendt" icon={<Send title="sendt" />} />
            </Tabs.List>
            <Tabs.Panel value="logg">
                Logg-tab
            </Tabs.Panel>
            <Tabs.Panel value="inbox">
                Inbox-tab
            </Tabs.Panel>
            <Tabs.Panel value="sendt">
                Sendt-tab
            </Tabs.Panel>
        </Tabs>
    );
};

export default TabsExample;