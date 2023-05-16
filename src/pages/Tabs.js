import { Tabs } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";
import {
  ClockDashedIcon,
  InboxIcon,
  PaperplaneIcon,
} from "@navikt/aksel-icons";

const TabsExample = () => {
  const [state, setState] = useState("logg");

  return (
    <Layout title="Tabs">
      <Tabs value={state} onChange={setState}>
        <Tabs.List>
          <Tabs.Tab
            value="logg"
            label="Logg"
            icon={<ClockDashedIcon title="historielogg" />}
          />
          <Tabs.Tab
            value="inbox"
            label="Inbox"
            icon={<InboxIcon title="inbox" />}
          />
          <Tabs.Tab
            value="sendt"
            label="Sendt"
            icon={<PaperplaneIcon title="sendt" />}
          />
        </Tabs.List>
        <Tabs.Panel value="logg"></Tabs.Panel>
        <Tabs.Panel value="inbox"></Tabs.Panel>
        <Tabs.Panel value="sendt"></Tabs.Panel>
      </Tabs>
    </Layout>
  );
};

export default TabsExample;
