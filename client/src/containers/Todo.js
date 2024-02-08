import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [id, setId] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }


    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    };

    const addTodo = async () => {
         if (text.trim() === '') return;
        const response = await axios.post('http://localhost:5000/api/todos', { text });
        console.log("response",response.data)
        setTodos([...todos, response.data]);
        setText('');
    };

    const deleteText = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/delete/${id}`);
            fetchTodos();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    const getText = async (todo) => {
        try {
            setId(todo._id)
            if (todo._id) {
                setText(todo.text)
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    const updateText = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/api/todos/update/${id}`, { text: text });
            console.log("ress",res)
            setText("");
            fetchTodos();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }





    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {
                    id ?(
                        <button onClick={updateText}>update</button>
                    ):(

                        <button onClick={addTodo}>Add</button>
                    )
                }
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Text</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                todos.length ? (
                                    <>
                                        {todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((todo, key) => {
                                            return (
                                                <TableRow hover role='checkbox' tabIndex={-1} key={key}>
                                                    <TableCell>{todo._id}</TableCell>
                                                    <TableCell>{todo.text}</TableCell>
                                                    <TableCell className='edit_delete'>
                                                        <p onClick={(e) => getText(todo)}><EditIcon /></p>
                                                        <p onClick={(e) => deleteText(todo._id)}><DeleteIcon /></p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <TableRow hover tabIndex={-1}>
                                        <TableCell colSpan={5} sx={{ textAlign: "center" }}><Typography variant="body2">No Data Found</Typography></TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component='div'
                    count={todos.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}
