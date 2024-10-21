import React from "react";
import FigureWithKey from "../illustrations/FigureWithKey";
import { BodyLong, Button, Heading, Link } from "@navikt/ds-react";
import { EnterIcon } from "@navikt/aksel-icons";
import PropTypes from "prop-types";

function LoginPage({ link, className }) {
  return (
    <div className={className ? `arb-log-in ${className}` : "arb-log-in"}>
      <FigureWithKey className="mb-8" ariaHidden="true" />
      <Heading spacing size="large" level="1">
        Logg inn for å fortsette
      </Heading>
      <BodyLong className="mb-8">
        Vi sender deg videre etter du har logget inn.
      </BodyLong>
      <Button
        as="a"
        role="link"
        variant="primary"
        href={link}
        icon={<EnterIcon aria-hidden="true" />}
      >
        Logg inn
      </Button>
    </div>
  );
}

LoginPage.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
};

export default LoginPage;
