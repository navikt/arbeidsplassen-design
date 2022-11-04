import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

function Blockquote({ children, caption, className }) {
    return (
        <figure className={joinClassNames("dsa-blockquote-figure", className)}>
            <blockquote className="dsa-blockquote">{children}</blockquote>
            <figcaption className="dsa-blockquote-figcaption">
                {caption}
            </figcaption>
        </figure>
    );
}

Blockquote.defaultProps = {
    caption: undefined,
    className: undefined,
};

Blockquote.propTypes = {
    caption: PropTypes.string,
    className: PropTypes.string,
};

export default Blockquote;
