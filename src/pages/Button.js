import { Button } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { TrashIcon } from "@navikt/aksel-icons";

const ButtonExample = () => {
  return (
    <Layout title="Button">
      <div className="flex mb-2">
        <Button variant="primary">Button</Button>
        <Button variant="primary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="primary" icon={<TrashIcon />} iconPosition="right">
          Button
        </Button>
        <Button variant="primary" size="small">
          Button
        </Button>
        <Button variant="primary" size="xsmall">
          Button
        </Button>
        <Button variant="primary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="primary">
          Button
        </Button>
        <Button disabled variant="primary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button
          disabled
          variant="primary"
          icon={<TrashIcon />}
          iconPosition="right"
        >
          Button
        </Button>
        <Button disabled variant="primary" size="small">
          Button
        </Button>
        <Button disabled variant="primary" size="xsmall">
          Button
        </Button>
        <Button disabled variant="primary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="secondary" icon={<TrashIcon />} iconPosition="right">
          Button
        </Button>
        <Button variant="secondary" size="small">
          Button
        </Button>
        <Button variant="secondary" size="xsmall">
          Button
        </Button>
        <Button variant="secondary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="secondary">
          Button
        </Button>
        <Button disabled variant="secondary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button
          disabled
          variant="secondary"
          icon={<TrashIcon />}
          iconPosition="right"
        >
          Button
        </Button>
        <Button disabled variant="secondary" size="small">
          Button
        </Button>
        <Button disabled variant="secondary" size="xsmall">
          Button
        </Button>
        <Button disabled variant="secondary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="tertiary">Button</Button>
        <Button variant="tertiary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="tertiary" icon={<TrashIcon />} iconPosition="right">
          Button
        </Button>
        <Button variant="tertiary" size="small">
          Button
        </Button>
        <Button variant="tertiary" size="xsmall">
          Button
        </Button>
        <Button variant="tertiary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="tertiary">
          Button
        </Button>
        <Button disabled variant="tertiary" icon={<TrashIcon />}>
          Button
        </Button>
        <Button
          disabled
          variant="tertiary"
          icon={<TrashIcon />}
          iconPosition="right"
        >
          Button
        </Button>
        <Button disabled variant="tertiary" size="small">
          Button
        </Button>
        <Button disabled variant="tertiary" size="xsmall">
          Button
        </Button>
        <Button disabled variant="tertiary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="danger">Button</Button>
        <Button variant="danger" icon={<TrashIcon />}>
          Button
        </Button>
        <Button variant="danger" icon={<TrashIcon />} iconPosition="right">
          Button
        </Button>
        <Button variant="danger" size="small">
          Button
        </Button>
        <Button variant="danger" size="xsmall">
          Button
        </Button>
        <Button variant="danger" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="danger">
          Button
        </Button>
        <Button disabled variant="danger" icon={<TrashIcon />}>
          Button
        </Button>
        <Button
          disabled
          variant="danger"
          icon={<TrashIcon />}
          iconPosition="right"
        >
          Button
        </Button>
        <Button disabled variant="danger" size="small">
          Button
        </Button>
        <Button disabled variant="danger" size="xsmall">
          Button
        </Button>
        <Button disabled variant="danger" loading>
          Laster
        </Button>
      </div>
    </Layout>
  );
};

export default ButtonExample;
