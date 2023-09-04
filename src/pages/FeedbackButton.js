import Layout from "../examples/Layout";
import { FaceSmileIcon, FaceIcon, FaceFrownIcon } from "@navikt/aksel-icons";
import FeedbackButton from "@navikt/arbeidsplassen-react/Feedback/FeedbackButton";
import {
  BodyLong,
  BodyShort,
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
        className="mb-2"
        icon={
          <FaceSmileIcon aria-hidden="true" height="1.5rem" width="1.5rem" />
        }
      >
        Ja
      </FeedbackButton>

      <Heading size="medium" level="2" spacing>
        Full example
      </Heading>
      <Panel border={false} className="arb-panel-secondary">
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
              ariaDescribedBy="poll-title"
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
              ariaDescribedBy="poll-title"
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
              ariaDescribedBy="poll-title"
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
      </Panel>
    </Layout>
  );
};

export default FeedbackButtonExample;
