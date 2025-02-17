import React from "react";
import {
  BodyLong,
  Box,
  Button,
  Heading,
  Label,
  Link,
  List,
  Stack,
} from "@navikt/ds-react";
import PropTypes from "prop-types";
import { ListItem } from "@navikt/ds-react/List";

function CookieBanner({ onNecessaryOnlyClick, onAcceptAllClick }) {
  return (
    <Box
      as="section"
      aria-labelledby="arb-cookie-banner-title"
      padding={{ xs: "6 0", md: "8 0" }}
      background="surface-alt-2-subtle"
    >
      <div className="container-large">
        <Heading level="1" size="large" spacing id="arb-cookie-banner-title">
          Informasjonskapsler på arbeidsplassen.no
        </Heading>
        <BodyLong>
          Uansett valg deler vi aldri dine data med andre.{" "}
          <Link href="/informasjonskapsler" variant="neutral" inlineText>
            Mer om informasjonskapsler på arbeidsplassen.no
          </Link>
        </BodyLong>

        <List aria-label="Beskrivelse av valgene du har:" className="mb-8">
          <ListItem>
            <Label as="span">Bare nødvendige:</Label> Sikrer at tjenesten
            fungerer og er trygg. Kan ikke velges bort.
          </ListItem>
          <ListItem>
            <Label as="span">Godta alle:</Label> Hjelper oss gjøre tjenestene
            bedre for deg basert på anonymisert bruk.
          </ListItem>
        </List>

        <Stack gap="2" direction={{ xs: "column", sm: "row" }}>
          <Button
            type="button"
            variant="secondary-neutral"
            onClick={onNecessaryOnlyClick}
          >
            Bare nødvendige
          </Button>
          <Button
            type="button"
            variant="secondary-neutral"
            onClick={onAcceptAllClick}
          >
            Godta alle
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

CookieBanner.propTypes = {
  onNecessaryOnlyClick: PropTypes.func.isRequired,
  onAcceptAllClick: PropTypes.func.isRequired,
};

export default CookieBanner;
