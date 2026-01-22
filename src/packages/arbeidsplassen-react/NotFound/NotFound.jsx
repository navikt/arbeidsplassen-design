import React from "react";
import ConfusedGrape from "../illustrations/ConfusedFigure";
import { BodyLong, Heading, VStack } from "@navikt/ds-react";
import PropTypes from "prop-types";

function NotFound({ title, text, className }) {
    return (
        <VStack align="center" className={className}>
            <ConfusedGrape className="mb-8" ariaHidden="true" />
            <Heading spacing size="large" align="center" level="1">
                {title ? title : "Fant ikke siden"}
            </Heading>
            {text ? (
                <BodyLong align="center">{text}</BodyLong>
            ) : (
                <BodyLong align="center">
                    Nettsiden kan være slettet eller flyttet, eller det var en feil i lenken som førte deg hit.
                </BodyLong>
            )}
        </VStack>
    );
}

NotFound.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
};

export default NotFound;
