import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import ChevronRight from "../Feather/ChevronRight";

const LinkPanel = React.forwardRef(function LinkPanel(
    { onClick, href, children, className, variant, size },
    ref
) {
    return (
        <a
            className={joinClassNames(
                "dsa-link-panel",
                `dsa-link-panel-${variant}`,
                `dsa-link-panel-${size}`,
                className
            )}
            href={href}
            ref={ref}
            onClick={onClick}
        >
            <div>{children}</div>
            <div className="dsa-link-panel-icon">
                <ChevronRight size="1em" />
            </div>
        </a>
    );
});

LinkPanel.Title = ({ children }) => {
    return <div className="dsa-link-panel-title">{children}</div>;
};

LinkPanel.Description = ({ children }) => {
    return <div className="dsa-link-panel-description">{children}</div>;
};

LinkPanel.defaultProps = {
    className: undefined,
    variant: "tertiary",
    size: "small",
};

LinkPanel.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary-dark",
        "primary",
        "secondary",
        "tertiary",
    ]),
    size: PropTypes.oneOf(["small", "medium"]),
};

export default LinkPanel;
