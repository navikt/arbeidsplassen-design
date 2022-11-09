import React from "react";
import { HeaderRoutes } from "./Header";
import TabMenu, { TabMenuItem } from "../TabMenu/TabMenu";

function CompanyMenu({ active }) {
    return (
        <TabMenu>
            <TabMenuItem
                className="dsa-header-hide-on-desktop"
                active={active === HeaderRoutes.BEDRIFT}
            >
                <a href="/bedrift">Forside</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.STILLINGSANNONSER}>
                <a href="/bedrift/stillingsannonser">Stillingsannonser</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.JOBBTREFF_BEDRIFT}>
                <a href="/bedrift/jobbtreff">Jobbtreff</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.INTERESSEMELDIGER}>
                <a href="/bedrift/interessemeldinger">Interessemeldinger</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.KANDIDATLISTER}>
                <a href="/bedrift/kandidater">Kandidatlister</a>
            </TabMenuItem>
        </TabMenu>
    );
}

export default CompanyMenu;
