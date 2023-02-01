import { Table } from "@navikt/ds-react";
import { format } from "date-fns";

const TableExample = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
          <Table.HeaderCell scope="col">Fødseslnr.</Table.HeaderCell>
          <Table.HeaderCell scope="col">Start</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ name, fnr, start }, i) => {
          return (
            <Table.Row key={i + fnr}>
              <Table.HeaderCell scope="row">{name}</Table.HeaderCell>
              <Table.DataCell>{fnr}</Table.DataCell>
              <Table.DataCell>
                {format(new Date(start), "dd.MM.yyyy")}
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const data = [
  {
    name: "Jakobsen, Markus",
    fnr: "432",
    start: "2021-04-28T19:12:14.358Z",
  },
  {
    name: "Halvorsen, Mari",
    fnr: "234",
    start: "2022-01-29T09:51:19.833Z",
  },
  {
    name: "Christiansen, Mathias",
    fnr: "123",
    start: "2021-06-04T20:57:29.159Z",
  },
  {
    name: "Fredriksen, Leah",
    fnr: "223",
    start: "2021-08-31T15:47:36.293Z",
  },
  {
    name: "Evensen, Jonas",
    fnr: "144",
    start: "2021-07-17T11:13:26.116Z",
  },
];

export default TableExample;
