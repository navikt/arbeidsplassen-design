import React, { useState } from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";
import ChevronDown from "../Feather/ChevronDown";
import ChevronUp from "../Feather/ChevronUp";

export const CardTitle = ({ children }) => (
    <div className="dsa-card-title">{children}</div>
);

export const CardToolbar = ({ children }) => (
    <div className="dsa-card-toolbar">{children}</div>
);

export const CardContent = ({ children }) => (
    <div className="dsa-card-main">{children}</div>
);

export const CardExpandableContent = ({ children }) => (
    <div className="dsa-card-expandable-content">{children}</div>
);

export const CardSecondaryMenu = ({ children }) => (
    <div className="dsa-card-secondary-menu">{children}</div>
);

function Card({ children, className, expandable, expandedByDefault }) {
    const [expanded, setExpanded] = useState(expandedByDefault);

    return (
        <div className={joinClassNames("dsa-card", className)}>
            {expandable && (
                <button
                    className={joinClassNames(
                        "dsa-card-expander",
                        expanded ? "dsa-card-expanded" : undefined
                    )}
                    aria-expanded={expanded ? "true" : "false"}
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    {expanded ? (
                        <ChevronUp size="1.5rem" />
                    ) : (
                        <ChevronDown size="1.5rem" />
                    )}
                </button>
            )}
            <div
                className={joinClassNames(
                    "dsa-card-content",
                    !expandable ? "dsa-card-content-border" : undefined,
                    !expanded ? "dsa-card-hidden" : undefined
                )}
            >
                {children}
            </div>
        </div>
    );
}

Card.defaultProps = {
    className: undefined,
    expandable: false,
    expandedByDefault: false,
};

Card.propTypes = {
    className: PropTypes.string,
    expandable: PropTypes.bool,
    expandedByDefault: PropTypes.bool,
};

export default Card;
