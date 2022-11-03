import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function List({ children, variant, className, spacing }) {
    const ListType = variant;
    return (
        <ListType
            className={joinClassNames(
                "dsa-list",
                spacing ? `dsa-list-space` : undefined,
                className
            )}
        >
            {children}
        </ListType>
    );
}

List.defaultProps = {
    className: undefined,
    variant: "ul",
    spacing: false,
};

List.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["ul", "ol"]),
    spacing: PropTypes.bool,
};

export default List;
