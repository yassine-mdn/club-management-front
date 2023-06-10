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
    Search20Filled
} from "@fluentui/react-icons";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const ClubTable = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(1);


    const [items, setItems] = useState([
        {
            idC: 0,
            name: "test",
            president: "test test",
            type: "test",
            status: "test",
            budget: 10,
        }
    ]);


    useEffect(() => {

        axios.get("http://localhost:8080/api/v1/clubs", {
            params: {
                pageNumber: page,
                pageSize: 5,
                search: search
            }
        }).then(
            response => {


                setItems(response.data.map(club => ({
                    idC: club?.idC,
                    name: club?.name,
                    president: `${club?.committeeMembers[0].firstName} ${club?.committeeMembers[0].lastName}`,
                    type: club?.type,
                    status: club?.status,
                    budget: club?.budget.budget_restant,
                })))
                setMaxPages(response.headers.get("total-pages"))

            }
        )

    }, [search,page]);


    const columns = [
        createTableColumn({
            columnId: "name",
            compare: (a, b) => {
                return a.name.localeCompare(b.name);
            },
        }),
        createTableColumn({
            columnId: "president",
            compare: (a, b) => {
                return a.president.localeCompare(b.president);
            },
        }),
        createTableColumn({
            columnId: "type",
            compare: (a, b) => {
                return a.type.localeCompare(b.type);
            },
        }),
        createTableColumn({
            columnId: "status",
            compare: (a, b) => {
                return a.status.localeCompare(b.status);
            },
        }),
        createTableColumn({
            columnId: "budget",
            compare: (a, b) => {
                return a.budget - b.budget;
            },
        }),
    ];

    const [sortState, setSortState] = React.useState({
        sortDirection: "ascending",
        sortColumn: "file",
    });

    const {
        getRows,
        sort: {getSortDirection, toggleColumnSort, sort},
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
                <Input contentBefore={<Search20Filled/>} size={"large"} type={"search"}
                       style={{maxWidth: "800px", width: "600px"}} value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className={"flex flex-col justify-between h-full pt-4"}>

                <Table sortable aria-label="Table with controlled sort">
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell {...headerSortProps("name")}>Name</TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("president")}>
                                President
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("type")}>
                                Type
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("status")}>
                                Status
                            </TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("budget")}>
                                Budget
                            </TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map(({item}) => (
                            <TableRow key={item.idC} onClick={() =>navigate(`${item.idC}`)}>
                                <TableCell>
                                    <TableCellLayout>
                                        {item.name}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>
                                    <TableCellLayout
                                        media={
                                            <Avatar
                                                name={item.president}
                                                color={"colorful"}
                                            />
                                        }
                                    >
                                        {item.president}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>
                                    <TableCellLayout>
                                        {item.status}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>{item.budget}</TableCell>
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

export default ClubTable;