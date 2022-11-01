import React from "react";
import ArrowRightIcon from "@/common/components/Feather/ArrowRightIcon";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

const LinkButton = React.forwardRef(function LinkButton({ onClick, href, children, className }, ref) {
    return (
        <a className={joinClassNames("dsa-link-button", className)} href={href} ref={ref} onClick={onClick}>
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
