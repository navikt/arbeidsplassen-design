import { Email, Historic, Send } from "@navikt/ds-icons";
import { BodyLong, Panel, Tabs } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const TabsExample = () => {
  const [state, setState] = useState("logg");

  return (
    <Layout title="Tabs">
      <Tabs value={state} onChange={setState}>
        <Tabs.List>
          <Tabs.Tab
            value="logg"
            label="Logg"
            icon={<Historic title="historielogg" />}
          />
          <Tabs.Tab
            value="inbox"
            label="Inbox"
            icon={<Email title="inbox" />}
          />
          <Tabs.Tab value="sendt" label="Sendt" icon={<Send title="sendt" />} />
        </Tabs.List>
        <Tabs.Panel value="logg"></Tabs.Panel>
        <Tabs.Panel value="inbox"></Tabs.Panel>
        <Tabs.Panel value="sendt"></Tabs.Panel>
      </Tabs>
    </Layout>
  );
};

export default TabsExample;
