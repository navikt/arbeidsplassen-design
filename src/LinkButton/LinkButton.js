import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";
import ChevronRight from "../Feather/ChevronRight";

const LinkButton = React.forwardRef(function LinkButton(
    { onClick, href, children, className, variant },
    ref
) {
    return (
        <a
            className={joinClassNames(
                "dsa-link-button",
                `dsa-link-button-${variant}`,
                className
            )}
            href={href}
            ref={ref}
            onClick={onClick}
        >
            {children}
            <span className="dsa-link-button-icon">
                <ChevronRight size="1em" />
            </span>
        </a>
    );
});

LinkButton.defaultProps = {
    className: undefined,
    variant: "primary",
};

LinkButton.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary-dark",
        "primary",
        "secondary",
        "tertiary",
    ]),
};

export default LinkButton;
