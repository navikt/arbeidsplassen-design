import { Heading, HStack, Tag } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const TagExample = () => {
  return (
    <Layout title="Tag">
      <Heading size="medium" level="2" spacing>
        Subtle
      </Heading>
      <HStack gap="4" className="mb-4">
        <Tag variant="info">Info</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Danger</Tag>
        <Tag variant="neutral">Neutral</Tag>
        <Tag variant="alt1">Alt 1</Tag>
        <Tag variant="alt2">Alt 2</Tag>
        <Tag variant="alt3">Alt 3</Tag>
      </HStack>

      <Heading size="medium" level="2" spacing>
        Moderate
      </Heading>
      <HStack gap="4" className="mb-4">
        <Tag variant="info-moderate">Info</Tag>
        <Tag variant="success-moderate">Success</Tag>
        <Tag variant="warning-moderate">Warning</Tag>
        <Tag variant="error-moderate">Danger</Tag>
        <Tag variant="neutral-moderate">Neutral</Tag>
        <Tag variant="alt1-moderate">Alt 1</Tag>
        <Tag variant="alt2-moderate">Alt 2</Tag>
        <Tag variant="alt3-moderate">Alt 3</Tag>
      </HStack>

      <Heading size="medium" level="2" spacing>
        Filled
      </Heading>
      <HStack gap="4" className="mb-4">
        <Tag variant="info-filled">Info</Tag>
        <Tag variant="success-filled">Success</Tag>
        <Tag variant="warning-filled">Warning</Tag>
        <Tag variant="error-filled">Danger</Tag>
        <Tag variant="neutral-filled">Neutral</Tag>
        <Tag variant="alt1-filled">Alt 1</Tag>
        <Tag variant="alt2-filled">Alt 2</Tag>
        <Tag variant="alt3-filled">Alt 3</Tag>
      </HStack>

      <Heading size="medium" level="2" spacing>
        Medium or small size
      </Heading>
      <HStack gap="4" className="mb-4">
        <Tag variant="info-moderate" size="small">
          Small
        </Tag>
        <Tag variant="info-moderate" size="xsmall">
          Xsmall
        </Tag>
      </HStack>
    </Layout>
  );
};

export default TagExample;
