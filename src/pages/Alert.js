import { Alert, Heading, Link } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function Template({ showTitle, title, text, ...args }) {
  return (
    <div className="mb-4">
      <Alert {...args} className="mb-1_5">
        {!showTitle && (
          <Heading spacing size="xsmall" level="3">
            {title}
          </Heading>
        )}
        {text} <Link href="#">Les mer på arbeidsplassen.no</Link>
      </Alert>
      <Alert {...args}>Alert without heading</Alert>
    </div>
  );
}

const AlertExample = () => {
  return (
    <Layout title="Alert">
      <Template
        variant="info"
        title="Info alert"
        text="Used for notifying users about temporary good-to-know information without any real consequence for user behavour."
      />

      <Template
        variant="warning"
        title="Warning alert"
        text="Used for alerting users about a potential outage or informing the user that certain actions may lead to certain consequences."
      />
      <Template
        variant="error"
        title="Error alert"
        text="Used for communicating system and service errors."
      />
      <Template
        variant="success"
        title="Success alert"
        text="Used for notifying users about a successful action performed."
      />
      <Template
        variant="info"
        inline
        title="Inline"
        text="Quisque faucibus dolor ac diam congue blandit. Integer bibendum viverra lorem et commodo. "
      />
      <Heading size="medium" level="2" spacing>
        Full width (no border)
      </Heading>
      <Template
        fullWidth
        variant="info"
        title="Info alert"
        text="Used for notifying users about temporary good-to-know information without any real consequence for user behavour."
      />
    </Layout>
  );
};

export default AlertExample;
