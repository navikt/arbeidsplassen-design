import { Checkbox, Table } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const TableExample = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [sort, setSort] = useState(null);

    const toggleSelectedRow = (value) =>
        setSelectedRows((list) => (list.includes(value) ? list.filter((id) => id !== value) : [...list, value]));

    const handleSort = (sortKey) => {
        setSort(
            sort && sortKey === sort.orderBy && sort.direction === "descending"
                ? undefined
                : {
                      orderBy: sortKey,
                      direction:
                          sort && sortKey === sort.orderBy && sort.direction === "ascending"
                              ? "descending"
                              : "ascending",
                  },
        );
    };

    let sortData = data;

    sortData = sortData.slice().sort((a, b) => {
        if (sort) {
            const comparator = (a, b, orderBy) => {
                if (b[orderBy] < a[orderBy] || b[orderBy] === undefined) {
                    return -1;
                }
                if (b[orderBy] > a[orderBy]) {
                    return 1;
                }
                return 0;
            };

            return sort.direction === "ascending" ? comparator(b, a, sort.orderBy) : comparator(a, b, sort.orderBy);
        }
        return 1;
    });

    return (
        <Layout title="Table">
            <Table sort={sort} onSortChange={(sortKey) => handleSort(sortKey)}>
                <Table.Header>
                    <Table.Row>
                        <Table.DataCell>
                            <Checkbox
                                checked={selectedRows.length === data.length}
                                indeterminate={selectedRows.length && selectedRows.length !== data.length}
                                onChange={() => {
                                    selectedRows.length
                                        ? setSelectedRows([])
                                        : setSelectedRows(data.map(({ fnr }) => fnr));
                                }}
                                hideLabel
                            >
                                Velg alle rader
                            </Checkbox>
                        </Table.DataCell>

                        <Table.ColumnHeader scope="col" sortKey="name" sortable>
                            Navn
                        </Table.ColumnHeader>
                        <Table.HeaderCell scope="col">Fødseslnr.</Table.HeaderCell>
                        <Table.ColumnHeader scope="col" sortKey="start" sortable>
                            Start
                        </Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sortData.map(({ name, fnr, start }, i) => {
                        return (
                            <Table.Row key={i + fnr} selected={selectedRows.includes(fnr)}>
                                <Table.DataCell>
                                    <Checkbox
                                        hideLabel
                                        checked={selectedRows.includes(fnr)}
                                        onChange={() => {
                                            toggleSelectedRow(fnr);
                                        }}
                                        aria-labelledby={`id-${fnr}`}
                                    >
                                        {" "}
                                    </Checkbox>
                                </Table.DataCell>
                                <Table.HeaderCell scope="row">
                                    <span id={`id-${fnr}`}>{name}</span>
                                </Table.HeaderCell>
                                <Table.DataCell>{fnr}</Table.DataCell>
                                <Table.DataCell>{start}</Table.DataCell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Layout>
    );
};

const data = [
    {
        name: "Jakobsen, Markus",
        fnr: "03129265463",
        start: "2020-04-28",
    },
    {
        name: "Halvorsen, Mari",
        fnr: "16063634134",
        start: "2022-01-29",
    },
    {
        name: "Christiansen, Mathias",
        fnr: "18124441438",
        start: "2021-06-04",
    },
    {
        name: "Fredriksen, Leah",
        fnr: "24089080180",
        start: "2015-08-31",
    },
    {
        name: "Evensen, Jonas",
        fnr: "18106248460",
        start: "2010-07-17",
    },
];

export default TableExample;
