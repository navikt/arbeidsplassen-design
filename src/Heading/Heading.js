import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Heading({ level, size, children, className, id }) {
    const defaultSizes = ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"];
    const HeadingLevel = "h" + level;

    if (!size) {
        size = defaultSizes[parseInt(level) - 1];
    }

    return (
        <HeadingLevel id={id} className={joinClassNames("dsa-heading", `dsa-heading-${size}`, className)}>
            {children}
        </HeadingLevel>
    );
}

Heading.defaultProps = {
    id: undefined,
    size: undefined,
    className: undefined,
};

Heading.propTypes = {
    id: PropTypes.string,
    level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
    size: PropTypes.oneOf(["xxlarge", "xlarge", "large", "medium", "small", "xsmall"]),
    className: PropTypes.string,
};

export default Heading;
