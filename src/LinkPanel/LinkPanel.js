import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import ChevronRight from "../Feather/ChevronRight";
import "./LinkPanel.css";

const LinkPanel = React.forwardRef(function LinkPanel(
    { onClick, href, children, className, variant },
    ref
) {
    return (
        <a
            className={joinClassNames(
                "dsa-link-panel",
                `dsa-link-panel-${variant}`,
                className
            )}
            href={href}
            ref={ref}
            onClick={onClick}
        >
            {children}
            <span className="dsa-link-panel-icon">
                <ChevronRight size="1em" />
            </span>
        </a>
    );
});

LinkPanel.defaultProps = {
    className: undefined,
    variant: "primary",
};

LinkPanel.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary-dark",
        "primary",
        "secondary",
        "tertiary",
    ]),
};

export default LinkPanel;
