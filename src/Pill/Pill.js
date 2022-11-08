import React from "react";
import PropTypes from "prop-types";
import joinClassNames from "../joinClassNames";

const Pill = React.forwardRef(({ children, className, onClick }, ref) => (
    <span>
        <span className="dsa-pill-screen-reader-only">{children}</span>
        <button
            ref={ref}
            className={joinClassNames("dsa-pill", className)}
            aria-label={`Slett ${children}`}
            onClick={onClick}
        >
            <span aria-hidden="true">{children}</span>
            <svg
                role="img"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5896 4.4107C15.915 4.73614 15.915 5.26378 15.5896 5.58921L5.58958 15.5892C5.26414 15.9147 4.73651 15.9147 4.41107 15.5892C4.08563 15.2638 4.08563 14.7361 4.41107 14.4107L14.4111 4.4107C14.7365 4.08527 15.2641 4.08527 15.5896 4.4107Z"
                    fill="currentColor"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 4.4107C4.73651 4.08527 5.26414 4.08527 5.58958 4.4107L15.5896 14.4107C15.915 14.7361 15.915 15.2638 15.5896 15.5892C15.2641 15.9147 14.7365 15.9147 14.4111 15.5892L4.41107 5.58921C4.08563 5.26378 4.08563 4.73614 4.41107 4.4107Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    </span>
));

Pill.defaultProps = {
    className: undefined,
};

Pill.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Pill;
