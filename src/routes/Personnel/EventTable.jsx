import {
    Input,
    Avatar,
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    useTableFeatures,
    useTableSort,
    TableCellLayout,
    createTableColumn, Button,
} from "@fluentui/react-components";
import * as React from "react";
import {
    Search20Filled,
    FolderRegular,
    EditRegular,
    OpenRegular,
    DocumentRegular,
    PeopleRegular,
    DocumentPdfRegular,
    VideoRegular,
} from "@fluentui/react-icons";

const items = [
    {
        file: { label: "Meeting notes", icon: <DocumentRegular /> },
        author: { label: "Max Mustermann", status: "available" },
        lastUpdated: { label: "7h ago", timestamp: 3 },
        lastUpdate: {
            label: "You edited this",
            icon: <EditRegular />,
        },
        budget : 10,
    },
    {
        file: { label: "Thursday presentation", icon: <FolderRegular /> },
        author: { label: "Erika Mustermann", status: "busy" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
        budget : 10,
    },
    {
        file: { label: "Training recording", icon: <VideoRegular /> },
        author: { label: "John Doe", status: "away" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
        budget : 10,
    },
    {
        file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
        author: { label: "Jane Doe", status: "offline" },
        lastUpdated: { label: "Tue at 9:30 AM", timestamp: 1 },
        lastUpdate: {
            label: "You shared this in a Teams chat",
            icon: <PeopleRegular />,
        },
        budget : 10,
    },
];

const columns = [
    createTableColumn({
        columnId: "name",
        compare: (a, b) => {
            return a.file.label.localeCompare(b.file.label);
        },
    }),
    createTableColumn({
        columnId: "description",
        compare: (a, b) => {
            return a.author.label.localeCompare(b.author.label);
        },
    }),
    createTableColumn({
        columnId: "organisateur",
        compare: (a, b) => {
            return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
        },
    }),
    createTableColumn({
        columnId: "date",
        compare: (a, b) => {
            return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
        },
    }),
    createTableColumn({
        columnId: "status",
        compare: (a, b) => {
            return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
        },
    }),
];
const EventTable = () => {

    const [sortState, setSortState] = React.useState({
        sortDirection: "ascending",
        sortColumn: "file",
    });

    const {
        getRows,
        sort: { getSortDirection, toggleColumnSort, sort },
    } = useTableFeatures(
        {
            columns,
            items,
        },
        [
            useTableSort({
                sortState,
                onSortChange: (e, nextSortState) => setSortState(nextSortState),
            }),
        ]
    );

    const headerSortProps = (columnId) => ({
        onClick: (e) => toggleColumnSort(e, columnId),
        sortDirection: getSortDirection(columnId),
    });

    const rows = sort(getRows());

    return (
        <div className={"flex flex-col gap-4 h-full overflow-hidden"}>
            <div className={"flex justify-between"}>
                <Input contentBefore={<Search20Filled/>} size={"large"} type={"search"} style={{maxWidth: "800px", width : "600px"}}/>
            </div>
            <div className={"flex flex-col justify-between h-full pt-4"}>

                <Table sortable aria-label="Table with controlled sort">
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell {...headerSortProps("name")}>Name</TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("description")}>
                                Description
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("organisateur")}>
                                Organiser
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("date")}>
                                Date
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("status")}>
                                Status
                            </TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map(({ item }) => (
                            <TableRow key={item.file.label}>
                                <TableCell>
                                    <TableCellLayout media={item.file.icon}>
                                        {item.file.label}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>
                                    <TableCellLayout
                                        media={
                                            <Avatar
                                                aria-label={item.author.label}
                                                name={item.author.label}
                                                color={"colorful"}
                                            />
                                        }
                                    >
                                        {item.author.label}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>{item.lastUpdated.label}</TableCell>
                                <TableCell>
                                    <TableCellLayout media={item.lastUpdate.icon}>
                                        {item.lastUpdate.label}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>{item.budget}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={"flex gap-2 ml-auto self-end"}>
                    <Button appearance={"primary"}>prev</Button>
                    <Button appearance={"primary"}>next</Button>
                </div>
            </div>
        </div>
    );
};

export default EventTable;