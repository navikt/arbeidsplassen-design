import Link from "next/link";
import { Button, Dropdown } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const DropdownExample = () => {
  return (
    <Layout title="Dropdown">
      <Dropdown>
        <Button as={Dropdown.Toggle}>Toggle</Button>
        <Dropdown.Menu>
          <Dropdown.Menu.GroupedList>
            <Dropdown.Menu.GroupedList.Heading>
              Systemer og oppslagsverk
            </Dropdown.Menu.GroupedList.Heading>
            <Dropdown.Menu.GroupedList.Item onClick={() => {}}>
              Gosys
            </Dropdown.Menu.GroupedList.Item>
            <Dropdown.Menu.GroupedList.Item as="a" href="https://nav.no">
              Infotrygd
            </Dropdown.Menu.GroupedList.Item>
          </Dropdown.Menu.GroupedList>
          <Dropdown.Menu.Divider />
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item as={Link} href="https://nav.no">
              Kontakt
            </Dropdown.Menu.List.Item>
            <Dropdown.Menu.List.Item
              as={Link}
              href="https://nav.no"
              target="_blank"
            >
              Hjelp (åpner i en ny fane)
            </Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </Layout>
  );
};

export default DropdownExample;
