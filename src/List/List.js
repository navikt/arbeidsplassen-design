import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../.utils/joinClassNames";

function List({ children, variant, className }) {
    const ListType = variant;
    return (
        <ListType className={joinClassNames("dsa-list", className)}>
            {children}
        </ListType>
    );
}

List.defaultProps = {
    className: undefined,
    variant: "ul",
};

List.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["ul", "ol"]),
};

export default List;
