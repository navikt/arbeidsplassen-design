import { Alert, Button, Heading, HStack, Link } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { TrashIcon } from "@navikt/aksel-icons";

function ButtonTemplate({ variant, ...args }) {
  return (
    <div className="mb-10">
      <Heading size="small" level="2" spacing>
        {variant}
      </Heading>
      <HStack gap="4">
        <Button variant={variant}>Button</Button>
        <Button variant={variant} icon={<TrashIcon />}>
          Button
        </Button>
        <Button variant={variant} icon={<TrashIcon />} disabled>
          Disabled
        </Button>
        <Button variant={variant} loading>
          Laster
        </Button>
      </HStack>
    </div>
  );
}

const ButtonExample = () => {
  return (
    <Layout title="Button">
      <ButtonTemplate variant="primary" />
      <ButtonTemplate variant="secondary" />
      <ButtonTemplate variant="tertiary" />
      <ButtonTemplate variant="danger" />
      <ButtonTemplate variant="primary-neutral" />
      <ButtonTemplate variant="secondary-neutral" />
      <ButtonTemplate variant="tertiary-neutral" />

      <Heading size="small" level="2" spacing>
        Small or xsmall
      </Heading>
      <HStack gap="4">
        <Button variant="primary" size="small">
          Button
        </Button>
        <Button variant="primary" size="xsmall">
          Button
        </Button>
      </HStack>
    </Layout>
  );
};

export default ButtonExample;
