import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

function Section({ id, children, className }) {
    return (
        <section id={id} className={cn("section", className)}>
            {children}
        </section>
    );
}

Section.defaultProps = {
    id: undefined,
    className: undefined,
};

Section.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

export default Section;
