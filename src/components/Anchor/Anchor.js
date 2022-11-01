import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Anchor = React.forwardRef(function Anchor({ onClick, href, children, dark, className }, ref) {
    return (
        <a
            href={href}
            className={classNames("dsa-anchor", { ["dsa-anchor-dark"]: dark }, className)}
            onClick={onClick}
            ref={ref}
        >
            {children}
        </a>
    );
});

Anchor.defaultProps = {
    dark: false,
    onClick: undefined,
    className: undefined,
};

Anchor.propTypes = {
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Anchor;
