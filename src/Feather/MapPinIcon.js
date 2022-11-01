import React from "react";

function MapPinIcon({ title = "Sted", ariaHidden }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
            role="img"
            aria-hidden={ariaHidden}
            aria-label={title}
        >
            <title>{title}</title>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

MapPinIcon.propTypes = {};

export default MapPinIcon;
