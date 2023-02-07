import { Tag } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const TagExample = () => {
  return (
    <Layout title="Tag">
      <div className="flex gap-2 mb-1">
        <Tag variant="info-filled">Info</Tag>
        <Tag variant="success-filled">Success</Tag>
        <Tag variant="warning-filled">Warning</Tag>
        <Tag variant="error-filled">Error</Tag>
        <Tag variant="neutral-filled">Neutral</Tag>
      </div>
      <div className="flex gap-2 mb-1">
        <Tag variant="info">Info</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="neutral">Neutral</Tag>
      </div>
      <div className="flex gap-2 mb-1">
        <Tag variant="info" size="small">
          Small
        </Tag>
        <Tag variant="info" size="xsmall">
          Xsmall
        </Tag>
      </div>
    </Layout>
  );
};

export default TagExample;
