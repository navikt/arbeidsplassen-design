import React from "react";
import { HeaderRoutes } from "./Header";
import TabMenu, { TabMenuItem } from "../TabMenu/TabMenu";

function PersonMenu({ active }) {
    return (
        <TabMenu>
            <TabMenuItem
                className="dsa-header-hide-on-desktop"
                active={active === HeaderRoutes.PERSON}
            >
                <a href="/">Forside</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.STILLIGER}>
                <a href="/stillinger">Ledige stillinger</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.JOBBTREFF}>
                <a href="/jobbtreff">Jobbtreff</a>
            </TabMenuItem>
            <TabMenuItem active={active === HeaderRoutes.CV}>
                <a href="/cv">CV</a>
            </TabMenuItem>
        </TabMenu>
    );
}

PersonMenu.propTypes = {};

export default PersonMenu;
