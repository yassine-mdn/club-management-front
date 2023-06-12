import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    Avatar, Button,
    createTableColumn,
    Input,
    Table, TableBody, TableCell, TableCellLayout,
    TableHeader, TableHeaderCell,
    TableRow,
    useTableFeatures,
    useTableSort
} from "@fluentui/react-components";
import * as React from "react";
import {Search20Filled} from "@fluentui/react-icons";
import { saveAs } from 'file-saver';



const MembersList = () => {


    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(1);


    const [items, setItems] = useState([
        {
            idA: 0,
            studentId: 0,
            fullName: "test",
            email: "test test",
        }
    ]);


    useEffect(() => {

        axios.get("http://localhost:8080/api/v1/clubs/4/members", {
            params: {
                pageNumber: page,
                pageSize: 15,

            }
        }).then(
            response => {


                setItems(response.data.map(user => ({
                    idA: user?.idA,
                    studentId: user?.studentId,
                    fullName: `${user?.firstName} ${user?.lastName}`,
                    email: user?.email,
                })))
                setMaxPages(response.headers.get("total-pages"))

            }
        )

    }, [search,page]);


    const columns = [
        createTableColumn({
            columnId: "studentId",
            compare: (a, b) => {
                return a.studentId - b.studentId;
            },
        }),
        createTableColumn({
            columnId: "fullName",
            compare: (a, b) => {
                return a.fullName.localeCompare(b.fullName);
            },
        }),
        createTableColumn({
            columnId: "email",
            compare: (a, b) => {
                return a.email.localeCompare(b.email);
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
                <div className={"flex gap-4"}>
                    <input id={"files"} type={"file"} title={" "} className={"relative z-50 left-20 bg-transparent text-transparent file:text-transparent file:bg-transparent file:border-0 w-20"}/>
                    <Button appearance={"primary"} size={"large"} >Import</Button>
                    <Button appearance={"primary"}
                            size={"large"}
                            onClick={() => (
                                axios.get(`http://localhost:8080/api/v1/clubs/4/members/file`, { responseType: 'blob' }).then (response => {
                                    const type = response.headers['content-type']
                                    saveAs(new Blob([response.data], { type: type}), `club-members`);
                                }).catch((response) => {
                                    console.error("Could not Download the Excel report from the backend.", response);
                                })
                            )}

                    >Export</Button>
                </div>
            </div>
            <div className={"flex flex-col justify-between h-full pt-4"}>

                <Table sortable aria-label="Table with controlled sort">
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell {...headerSortProps("studentId")}>Student ID</TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("fullName")}>Full Name</TableHeaderCell>
                            <TableHeaderCell {...headerSortProps("email")}>Email</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map(({item}) => (
                            <TableRow key={item.idA} onClick={() =>navigate(`${item.idC}`)}>
                                <TableCell>
                                    <TableCellLayout>
                                        {item.studentId}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>
                                    <TableCellLayout
                                        media={
                                            <Avatar
                                                name={item.fullName}
                                                color={"colorful"}
                                            />
                                        }
                                    >
                                        {item.fullName}
                                    </TableCellLayout>
                                </TableCell>
                                <TableCell>{item.email}</TableCell>
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

export default MembersList;