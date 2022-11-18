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

TabMenu.Item = ({ children, active, className }) => (
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

TabMenu.Item.defaultProps = {
    className: undefined,
    active: false,
};

TabMenu.Item.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
};

export default TabMenu;
