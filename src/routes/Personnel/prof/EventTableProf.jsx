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
    createTableColumn, Button,
} from "@fluentui/react-components";
import * as React from "react";
import {
    Search20Filled,
} from "@fluentui/react-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";




const EventTableProf = () => {

    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(1);

    const [items, setItems] = useState([
        {
            idEvent: 0,
            name: "test",
            description: "test test",
            date: "test",
            status: 10,
        }
    ]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/v1/events", {
            params: {
                pageNumber: page,
                pageSize: 1,
            }
        }).then(
            response => {


                setItems(response.data.map(event => ({
                    idEvent: event.idEvent,
                    name: event.name,
                    description: event.description,
                    date: event.date,
                    status: event.status,
                })))
                setMaxPages(response.headers.get("total-pages"))

            }
        )

    }, [page]);

    const columns = [
        createTableColumn({
            columnId: "name",
            compare: (a, b) => {
                return a.name.localeCompare(b.name);
            },
        }),
        createTableColumn({
            columnId: "description",
            compare: (a, b) => {
                return a.description.localeCompare(b.description);
            },
        }),
        createTableColumn({
            columnId: "date",
            compare: (a, b) => {
                return a.date.localeCompare(b.date);
            },
        }),
        createTableColumn({
            columnId: "status",
            compare: (a, b) => {
                return a.status.localeCompare(b.status);
            },
        }),
    ];


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
                            <TableHeaderCell {...headerSortProps("date")}>
                                Date
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("status")}>
                                Status
                            </TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map(({item}) => (
                            <TableRow key={item.idEvent} onClick={()=> navigate(`${item.idEvent}`)}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{moment(item.date).format("DD-MM-YYYY")}</TableCell>
                                <TableCell>{item.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={"flex gap-2 ml-auto self-end"}>
                    <Button appearance={"primary"} disabled={page === 0}  onClick={() =>setPage(prevState => (prevState-1))}>prev</Button>
                    <Button appearance={"primary" } disabled={page+1 == maxPages} onClick={() =>setPage(prevState => (prevState+1))}>next</Button>
                </div>
            </div>
        </div>
    );
};

export default EventTableProf;