import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function TabMenu({ children, className }) {
    return (
        <ul className={joinClassNames("dsa-tab-menu", className)}>
            {children}
        </ul>
    );
}

TabMenu.defaultProps = {
    className: undefined,
};

TabMenu.propTypes = {
    className: PropTypes.string,
};

export const TabMenuItem = ({ children, active, className }) => (
    <li
        className={joinClassNames(
            "dsa-tab-menu-item",
            active ? "dsa-tab-menu-active" : undefined,
            className
        )}
    >
        {children}
    </li>
);

TabMenuItem.defaultProps = {
    className: undefined,
    active: false,
};

TabMenuItem.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
};

export default TabMenu;
