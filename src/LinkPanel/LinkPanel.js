import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import ChevronRight from "../Feather/ChevronRight";

const LinkPanel = React.forwardRef(function LinkPanel(
    { onClick, href, children, className, color, size },
    ref
) {
    return (
        <a
            className={joinClassNames(
                "dsa-link-panel",
                `dsa-link-panel-${color}`,
                `dsa-link-panel-${size}`,
                className
            )}
            href={href}
            ref={ref}
            onClick={onClick}
        >
            <div className="dsa-link-panel-content">{children}</div>
            <div className="dsa-link-panel-icon">
                <ChevronRight size={size === "small" ? "1.5rem" : "2rem"} />
            </div>
        </a>
    );
});

export const LinkPanelDescription = ({ children }) => {
    return <div className="dsa-link-panel-description">{children}</div>;
};

export const LinkPanelTitle = ({ children }) => {
    return <div className="dsa-link-panel-title">{children}</div>;
};

LinkPanel.defaultProps = {
    className: undefined,
    color: "orange",
    size: "small",
};

LinkPanel.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(["dark-green", "light-green", "blue", "orange"]),
    size: PropTypes.oneOf(["small", "large"]),
};

export default LinkPanel;
