import React from "react";
import ChevronLeft from "../Feather/ChevronLeft";
import PropTypes from "prop-types";
import classNames from "classnames";

const BackLink = React.forwardRef(function Anchor({ onClick, href, children, className }, ref) {
    return (
        <a href={href} className={classNames("back-link", className)} onClick={onClick} ref={ref}>
            <ChevronLeft ariaHidden />
            {children}
        </a>
    );
});

BackLink.defaultProps = {
    href: "/",
    children: "Til forsiden",
    className: undefined,
};

BackLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
};

export default BackLink;
