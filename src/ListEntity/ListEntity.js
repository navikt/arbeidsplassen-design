import React, { useState } from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";
import ChevronDown from "../Feather/ChevronDown";
import ChevronUp from "../Feather/ChevronUp";

function ListEntity({ children, className, expandable, expandedByDefault }) {
    const [expanded, setExpanded] = useState(expandedByDefault);

    return (
        <div className={joinClassNames("dsa-list-entity", className)}>
            {expandable && (
                <button
                    className={joinClassNames(
                        "dsa-list-entity-expander",
                        expanded ? "dsa-list-entity-expanded" : undefined
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
                    "dsa-list-entity-content",
                    !expandable ? "dsa-list-entity-content-border" : undefined,
                    !expanded ? "dsa-list-entity-hidden" : undefined
                )}
            >
                {children}
            </div>
        </div>
    );
}

export const ListEntityHeading = ({ children }) => (
    <div className="dsa-list-entity-heading">{children}</div>
);

export const ListEntityToolbar = ({ children }) => (
    <div className="dsa-list-entity-toolbar">{children}</div>
);

export const ListEntityContent = ({ children }) => (
    <div className="dsa-list-entity-main">{children}</div>
);

export const ListEntityExpandableContent = ({ children }) => (
    <div className="dsa-list-entity-expandable-content">{children}</div>
);

export const ListEntitySecondaryMenu = ({ children }) => (
    <div className="dsa-list-entity-secondary-menu">{children}</div>
);

ListEntity.defaultProps = {
    className: undefined,
    expandable: false,
    expandedByDefault: false,
};

ListEntity.propTypes = {
    className: PropTypes.string,
    expandable: PropTypes.bool,
    expandedByDefault: PropTypes.bool,
};

export default ListEntity;
