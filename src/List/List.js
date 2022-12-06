import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function List({ children, variant, className, ariaLabel }) {
    const ListType = variant;
    return (
        <ListType
            className={joinClassNames("dsa-list", className)}
            aria-label={ariaLabel}
        >
            {children}
        </ListType>
    );
}

List.defaultProps = {
    ariaLabel: undefined,
    className: undefined,
    variant: "ul",
};

List.propTypes = {
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["ul", "ol"]),
};

export default List;
