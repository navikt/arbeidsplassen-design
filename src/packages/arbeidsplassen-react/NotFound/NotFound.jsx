import React from "react";
import ConfusedGrape from "../illustrations/ConfusedGrape";
import { BodyLong, Heading } from "@navikt/ds-react";
import PropTypes from "prop-types";

function NotFound({ title, text, className }) {
  return (
    <div className={className ? `arb-not-found ${className}` : "arb-not-found"}>
      <ConfusedGrape className="mb-8" ariaHidden="true" />
      <Heading spacing size="large" level="1" className="arb-not-found-title">
        {title ? title : "Fant ikke siden"}
      </Heading>
      {text ? (
        <BodyLong className="arb-not-found-description">{text}</BodyLong>
      ) : (
        <BodyLong className="arb-not-found-description">
          Nettsiden kan være slettet eller flyttet, eller det var en feil i
          lenken som førte deg hit.
        </BodyLong>
      )}
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default NotFound;
