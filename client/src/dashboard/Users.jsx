import React, { useEffect, useState } from 'react'
import { getAllUsers, removeUser } from '../service/user'
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Checkbox, Button, Chip } from '@mui/material';
import AddUser from '../components/AddUser';
import { toast } from 'react-toastify';

export default function Users() {

    const [users, serUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const result = await getAllUsers();
            serUsers(result)
            setIsLoading(true)
        })()
    }, [isLoading])


    // Change page handler
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Change rows per page handler
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate pagination
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    // Toggle selection of a row
    const handleSelect = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };


    const handleRemoveUser = async (userId) => {
        try {
            setIsLoading(!isLoading)
            await removeUser(userId);
            toast.success("User remove successfully")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log("error", error)
        }
    }


    return (
        <div>
            <Paper>
                <AddUser isLoading={() => [isLoading, setIsLoading]} />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < users.length}
                                    checked={selected.length === users.length}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            setSelected(users.map((row) => row.id));
                                        } else {
                                            setSelected([]);
                                        }
                                    }}
                                />
                            </TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                        ).map((row) => (
                            <TableRow key={row._id} hover onClick={(event) => handleSelect(event, row._id)}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selected.indexOf(row._id) !== -1} />
                                </TableCell>
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.firstname} {row.lastname} </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>
                                    <Chip label="Remove User" color="error" onDelete={() => handleRemoveUser(row._id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={4} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}
