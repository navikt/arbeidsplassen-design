import React from "react";
import { HeaderRoutes } from "./Header";
import TabMenu, { TabMenuItem } from "../TabMenu/TabMenu";

function PersonCompanyMenu({ active }) {
    return (
        <div className="dsa-header-menu-both">
            <TabMenu>
                <TabMenuItem active={active === HeaderRoutes.PERSON}>
                    <a href="/">Person</a>
                </TabMenuItem>
                <TabMenuItem active={active === HeaderRoutes.BEDRIFT}>
                    <a href="/bedrift">Bedrift</a>
                </TabMenuItem>
            </TabMenu>
        </div>
    );
}

export default PersonCompanyMenu;
