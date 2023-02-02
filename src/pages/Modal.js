import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import { useEffect, useState } from "react";
import Layout from "../examples/Layout";

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <Layout title="Modal">
      <Button onClick={() => setOpen(true)}>Åpne modal</Button>
      <Modal
        open={open}
        aria-label="Modal demo"
        onClose={() => setOpen((x) => !x)}
        aria-labelledby="modal-heading"
        className="modal-small"
      >
        <Modal.Content>
          <Heading spacing level="1" size="large" id="modal-heading">
            Laborum proident id ullamco
          </Heading>
          <BodyLong spacing>
            Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui
            incididunt dolor do ad ut. Incididunt eiusmod nostrud deserunt duis
            laborum. Proident aute culpa qui nostrud velit adipisicing minim.
            Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
            exercitation non minim minim pariatur sunt laborum ipsum.
            Exercitation nostrud est laborum magna non non aliqua qui esse.
          </BodyLong>
          <Button variant="primary" onClick={() => setOpen((x) => !x)}>
            Lukk modal
          </Button>
        </Modal.Content>
      </Modal>
    </Layout>
  );
};

export default ModalExample;