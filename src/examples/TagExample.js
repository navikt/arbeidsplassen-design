import { Tag } from "@navikt/ds-react";

const TagExample = () => {
  return (
    <div className="flex gap-2">
      <Tag variant="info-filled">Info</Tag>
      <Tag variant="success-filled">Success</Tag>
      <Tag variant="warning-filled">Warning</Tag>
      <Tag variant="error-filled">Error</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info" size="small">
        Small
      </Tag>
      <Tag variant="info" size="xsmall">
        Xsmall
      </Tag>
    </div>
  );
};

export default TagExample;
