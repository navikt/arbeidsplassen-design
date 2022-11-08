import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

/**
 *
 * @param children {"sad" | "asdasd"} asd ads
 * @param caption asdasd
 * @param className asd ad
 * @returns {JSX.Element}
 * @constructor
 */
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

export default Blockquote;
