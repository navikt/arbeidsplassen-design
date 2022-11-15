import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function PullOutside({ children, className }) {
    return (
        <div className={joinClassNames("dsa-pull-outside", className)}>
            {children}
        </div>
    );
}

PullOutside.defaultProps = {
    className: undefined,
};

PullOutside.propTypes = {
    className: PropTypes.string,
};

export default PullOutside;
