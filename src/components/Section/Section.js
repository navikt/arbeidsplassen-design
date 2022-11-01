import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Section({ id, children, className }) {
    return (
        <section id={id} className={joinClassNames("dsa-section", className)}>
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
