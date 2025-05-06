import React, { useEffect } from "react";
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
import { getCreatedAtValue, setCookie } from "./cookieUtils";

function CookieBanner({
  headingLevel = "1",
  handleCookieError,
  onNecessaryOnlyClick,
  onAcceptAllClick,
  onOpen,
  onClose,
}) {
  // Clear localStorage on load
  const preserveKeys = ["isDebug"];
  useEffect(() => {
    try {
      const preservedValues = {};
      preserveKeys.forEach((key) => {
        const value = localStorage.getItem(key);
        if (value) {
          preservedValues[key] = value;
        }
      });

      localStorage.clear();

      Object.entries(preservedValues).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
    } catch {}
  }, []);

  useEffect(() => {
    if (onOpen) {
      onOpen();
    }
  }, [onOpen]);

  const handleNecessaryOnlyClick = () => {
    if (onNecessaryOnlyClick) {
      onNecessaryOnlyClick();
    } else {
      try {
        const createdAt = getCreatedAtValue();

        const consentData = {
          consent: { analytics: false, surveys: false },
          userActionTaken: true,
          meta: {
            createdAt: createdAt,
            updatedAt: new Date().toISOString(),
            version: 1,
          },
        };

        setCookie(consentData);
      } catch (error) {
        if (handleCookieError) {
          handleCookieError(error);
        }
      }
    }

    if (onClose) {
      onClose();
    }
  };

  const handleAcceptAllClick = () => {
    if (onAcceptAllClick) {
      onAcceptAllClick();
    } else {
      try {
        const createdAt = getCreatedAtValue();

        const consentData = {
          consent: { analytics: true, surveys: true },
          userActionTaken: true,
          meta: {
            createdAt: createdAt,
            updatedAt: new Date().toISOString(),
            version: 1,
          },
        };

        setCookie(consentData);
      } catch (error) {
        if (handleCookieError) {
          handleCookieError(error);
        }
      }
    }

    if (onClose) {
      onClose();
    }
  };

  return (
    <Box
      as="section"
      aria-labelledby="arb-cookie-banner-title"
      padding={{ xs: "6 0", md: "8 0" }}
      background="surface-alt-2-subtle"
      id="arb-cookie-banner-section"
    >
      <div className="container-large">
        <Heading
          level={headingLevel}
          size="large"
          spacing
          id="arb-cookie-banner-title"
        >
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
            <Label as="span">Godta alle:</Label> Hjelper oss gjøre tjenestene
            bedre for deg basert på anonymisert bruk.
          </ListItem>
          <ListItem>
            <Label as="span">Bare nødvendige:</Label> Sikrer at tjenesten
            fungerer og er trygg. Kan ikke velges bort.
          </ListItem>
        </List>

        <Stack gap="2" direction={{ xs: "column", sm: "row" }}>
          <Button
            type="button"
            variant="secondary-neutral"
            onClick={handleAcceptAllClick}
          >
            Godta alle
          </Button>
          <Button
            type="button"
            variant="secondary-neutral"
            onClick={handleNecessaryOnlyClick}
          >
            Bare nødvendige
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

CookieBanner.propTypes = {
  headingLevel: PropTypes.string,
  handleCookieError: PropTypes.func,
  onNecessaryOnlyClick: PropTypes.func,
  onAcceptAllClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default CookieBanner;
