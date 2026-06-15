import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Table } from "@navikt/ds-react";
import { useState } from "react";
interface TableRow {
    name: string;
    fnr: string;
    start: string;
}

const meta = {
    title: "Aksel/Table",
    component: Table,
    tags: ["autodocs"],
    args: {
        size: "medium",
        zebraStripes: false,
        stickyHeader: false,
    },
    argTypes: {
        size: { control: "select", options: ["large", "medium", "small"] },
        zebraStripes: { control: "boolean" },
        stickyHeader: { control: "boolean" },
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: TableRow[] = [
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

export const Default: Story = {
    render: (args) => {
        const [selectedRows, setSelectedRows] = useState<string[]>([]);
        const [sort, setSort] = useState<
            { orderBy: keyof TableRow; direction: "ascending" | "descending" } | undefined
        >(undefined);

        const toggleSelectedRow = (value: string) =>
            setSelectedRows((list) => (list.includes(value) ? list.filter((id) => id !== value) : [...list, value]));

        const handleSort = (sortKey: keyof TableRow) => {
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
                const comparator = (a: TableRow, b: TableRow, orderBy: keyof TableRow) => {
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
            <Table {...args} sort={sort} onSortChange={(sortKey) => handleSort(sortKey as keyof TableRow)}>
                <Table.Header>
                    <Table.Row>
                        <Table.DataCell>
                            <Checkbox
                                checked={selectedRows.length === data.length}
                                indeterminate={selectedRows.length > 0 && selectedRows.length !== data.length}
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
        );
    },
};
