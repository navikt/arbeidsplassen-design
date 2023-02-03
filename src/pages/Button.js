import { Button } from "@navikt/ds-react";
import Trash from "../examples/icons/Trash";
import Layout from "../examples/Layout";

const ButtonExample = () => {
  return (
    <Layout title="Button">
      <div className="flex mb-2">
        <Button variant="primary">Slett</Button>
        <Button variant="primary" icon={<Trash />}>
          Slett
        </Button>
        <Button variant="primary" icon={<Trash />} iconPosition="right">
          Slett
        </Button>
        <Button variant="primary" size="small">
          Slett
        </Button>
        <Button variant="primary" size="xsmall">
          Slett
        </Button>
        <Button variant="primary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="primary">
          Slett
        </Button>
        <Button disabled variant="primary" icon={<Trash />}>
          Slett
        </Button>
        <Button
          disabled
          variant="primary"
          icon={<Trash />}
          iconPosition="right"
        >
          Slett
        </Button>
        <Button disabled variant="primary" size="small">
          Slett
        </Button>
        <Button disabled variant="primary" size="xsmall">
          Slett
        </Button>
        <Button disabled variant="primary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="secondary">Slett</Button>
        <Button variant="secondary" icon={<Trash />}>
          Slett
        </Button>
        <Button variant="secondary" icon={<Trash />} iconPosition="right">
          Slett
        </Button>
        <Button variant="secondary" size="small">
          Slett
        </Button>
        <Button variant="secondary" size="xsmall">
          Slett
        </Button>
        <Button variant="secondary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="secondary">
          Slett
        </Button>
        <Button disabled variant="secondary" icon={<Trash />}>
          Slett
        </Button>
        <Button
          disabled
          variant="secondary"
          icon={<Trash />}
          iconPosition="right"
        >
          Slett
        </Button>
        <Button disabled variant="secondary" size="small">
          Slett
        </Button>
        <Button disabled variant="secondary" size="xsmall">
          Slett
        </Button>
        <Button disabled variant="secondary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="tertiary">Slett</Button>
        <Button variant="tertiary" icon={<Trash />}>
          Slett
        </Button>
        <Button variant="tertiary" icon={<Trash />} iconPosition="right">
          Slett
        </Button>
        <Button variant="tertiary" size="small">
          Slett
        </Button>
        <Button variant="tertiary" size="xsmall">
          Slett
        </Button>
        <Button variant="tertiary" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="tertiary">
          Slett
        </Button>
        <Button disabled variant="tertiary" icon={<Trash />}>
          Slett
        </Button>
        <Button
          disabled
          variant="tertiary"
          icon={<Trash />}
          iconPosition="right"
        >
          Slett
        </Button>
        <Button disabled variant="tertiary" size="small">
          Slett
        </Button>
        <Button disabled variant="tertiary" size="xsmall">
          Slett
        </Button>
        <Button disabled variant="tertiary" loading>
          Laster
        </Button>
      </div>

      <div className="flex mb-2">
        <Button variant="danger">Slett</Button>
        <Button variant="danger" icon={<Trash />}>
          Slett
        </Button>
        <Button variant="danger" icon={<Trash />} iconPosition="right">
          Slett
        </Button>
        <Button variant="danger" size="small">
          Slett
        </Button>
        <Button variant="danger" size="xsmall">
          Slett
        </Button>
        <Button variant="danger" loading>
          Laster
        </Button>
      </div>
      <div className="flex mb-2">
        <Button disabled variant="danger">
          Slett
        </Button>
        <Button disabled variant="danger" icon={<Trash />}>
          Slett
        </Button>
        <Button disabled variant="danger" icon={<Trash />} iconPosition="right">
          Slett
        </Button>
        <Button disabled variant="danger" size="small">
          Slett
        </Button>
        <Button disabled variant="danger" size="xsmall">
          Slett
        </Button>
        <Button disabled variant="danger" loading>
          Laster
        </Button>
      </div>
    </Layout>
  );
};

export default ButtonExample;
