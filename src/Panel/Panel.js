import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function Panel({ children, className, color, compact, fullscreen }) {
    return (
        <div
            className={joinClassNames(
                "dsa-panel",
                `dsa-panel-${color}`,
                fullscreen ? "dsa-panel-fullscreen" : "dsa-panel-inline",
                compact ? "dsa-panel-compact" : undefined,
                className
            )}
        >
            {children}
        </div>
    );
}

Panel.defaultProps = {
    className: undefined,
    compact: false,
    fullscreen: false,
    color: undefined,
};

Panel.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    fullscreen: PropTypes.bool,
    color: PropTypes.oneOf(["green", "blue", "orange"]),
};

export default Panel;
