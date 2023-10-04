import React from "react";
import ConfusedGrape from "./ConfusedGrape";
import { BodyLong, Heading } from "@navikt/ds-react";
import PropTypes from "prop-types";

function NotFound({ title, children, className }) {
  return (
    <div className={className ? `arb-not-found ${className}` : "arb-not-found"}>
      <ConfusedGrape className="mb-8" ariaHidden="true" />
      <Heading spacing size="large" level="1">
        {title ? title : "Fant ikke siden"}
      </Heading>
      {children ? (
        children
      ) : (
        <BodyLong children="arb-not-found-description">
          Nettsiden kan være slettet eller flyttet, eller det var en feil i
          lenken som førte deg hit.
        </BodyLong>
      )}
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default NotFound;
