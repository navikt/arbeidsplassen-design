import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout title="Modal">
      <Button onClick={() => setOpen(true)}>Åpne modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Heading level="1" size="large">
            Laborum proident id ullamco
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <BodyLong spacing>
            Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui
            incididunt dolor do ad ut. Incididunt eiusmod nostrud deserunt duis
            laborum. Proident aute culpa qui nostrud velit adipisicing minim.
            Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
            exercitation non minim minim pariatur sunt laborum ipsum.
            Exercitation nostrud est laborum magna non non aliqua qui esse.
          </BodyLong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setOpen((x) => !x)}>
            Knapp 1
          </Button>
          <Button variant="secondary" onClick={() => setOpen((x) => !x)}>
            Knapp 2
          </Button>
          <Button variant="tertiary" onClick={() => setOpen((x) => !x)}>
            Knapp 3
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default ModalExample;
