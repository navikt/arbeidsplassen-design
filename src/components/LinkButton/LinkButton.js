import React from "react";
import ArrowRightIcon from "@/common/components/Feather/ArrowRightIcon";
import classNames from "classnames";
import PropTypes from "prop-types";

const LinkButton = React.forwardRef(function LinkButton({ onClick, href, children, className }, ref) {
    return (
        <a className={classNames("link-button", className)} href={href} ref={ref} onClick={onClick}>
            {children}
            <ArrowRightIcon ariaHidden />
        </a>
    );
});

LinkButton.defaultProps = {
    className: undefined,
};

LinkButton.propTypes = {
    className: PropTypes.string,
};

export default LinkButton;
