import React, { useState } from "react";
import PropTypes from "prop-types";
import ChevronDown from "../Feather/ChevronDown";
import ChevronUp from "../Feather/ChevronUp";
import joinClassNames from "../joinClassNames";
import "./Accordion.css";

function Accordion({ openByDefault, title, children, className }) {
    const [isOpen, setIsOpen] = useState(openByDefault);

    function onPanelClick() {
        setIsOpen(!isOpen);
    }

    return (
        <section className={joinClassNames("dsa-accordion", className)}>
            <h3 className="dsa-accordion-title">
                <button
                    className="dsa-accordion-button"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={onPanelClick}
                >
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                    <span>{title}</span>
                </button>
            </h3>
            {isOpen && <div className="accordion-content">{children}</div>}
        </section>
    );
}

Accordion.defaultProps = {
    openByDefault: false,
    className: undefined,
};

Accordion.propTypes = {
    openByDefault: PropTypes.bool,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Accordion;
