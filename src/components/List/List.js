import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function List({ children, variant, className }) {
    const ListType = variant;
    return <ListType className={classNames("dsa-list", className)}>{children}</ListType>;
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
