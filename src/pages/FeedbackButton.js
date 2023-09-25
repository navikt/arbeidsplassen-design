import Layout from "../examples/Layout";
import { FaceSmileIcon, FaceIcon, FaceFrownIcon } from "@navikt/aksel-icons";
import FeedbackButton from "@navikt/arbeidsplassen-react/Feedback/FeedbackButton";
import {
  BodyLong,
  BodyShort,
  Box,
  Heading,
  HStack,
  Link,
  Panel,
  VStack,
} from "@navikt/ds-react";

const FeedbackButtonExample = () => {
  return (
    <Layout title="FeedbackButton">
      <Heading size="medium" level="2" spacing>
        Example
      </Heading>
      <FeedbackButton
        className="mb-8"
        icon={
          <FaceSmileIcon aria-hidden="true" height="1.5rem" width="1.5rem" />
        }
      >
        Ja
      </FeedbackButton>

      <Heading size="medium" level="2" spacing>
        Full example
      </Heading>
      <Box padding="6" background="surface-alt-2-subtle" borderRadius="small">
        <VStack gap="2" align="center">
          <Heading
            level="3"
            size="small"
            className="text-center"
            id="poll-title"
          >
            Synes du søketreffene er relevante?
          </Heading>
          <HStack gap="2" justify="center">
            <FeedbackButton
              aria-describedby="poll-title"
              icon={
                <FaceSmileIcon
                  aria-hidden="true"
                  height="1.5rem"
                  width="1.5rem"
                />
              }
            >
              Ja
            </FeedbackButton>
            <FeedbackButton
              aria-describedby="poll-title"
              icon={
                <FaceFrownIcon
                  aria-hidden="true"
                  height="1.5rem"
                  width="1.5rem"
                />
              }
            >
              Nei
            </FeedbackButton>
            <FeedbackButton
              aria-describedby="poll-title"
              icon={
                <FaceIcon aria-hidden="true" height="1.5rem" width="1.5rem" />
              }
            >
              Vet ikke
            </FeedbackButton>
          </HStack>
          <BodyShort className="text-center">
            Er noe du savner eller noe du synes kunne vært bedre, så vil vi
            gjerne høre det.
          </BodyShort>
          <BodyShort className="text-center">
            <Link href="#">Skriv en kort tilbakemelding</Link>
          </BodyShort>
        </VStack>
      </Box>
    </Layout>
  );
};

export default FeedbackButtonExample;
