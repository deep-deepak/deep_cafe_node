import React, { useEffect, useState } from "react";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  Checkbox,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { getAllDishes, removeProduct } from "../service/dish";
import AddDish from "../components/AddDish";

export default function Products() {
  const [products, serProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [dishId, setDishId] = useState(null)

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getAllDishes();
      console.log("result", result)
      if (result.status) {
        serProducts(result.result);
        setIsLoading(true);
      }
    })();
  }, [isLoading]);

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
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage);

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

  const handleRemoveDish = async (dishId) => {
    try {
      setIsLoading(!isLoading);
      await removeProduct(dishId);
      toast.success("Dish Deleted successfully");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  const handleDishUPdate = (dishId) => {
    setDishId(dishId);
    setOpen(true);
  }

  const handleDialogClose = () => {
    setDishId(null); // Reset dishId to null
  };

  return (
    <div>
      <Paper>
        <AddDish
          isLoading={() => [isLoading, setIsLoading]}
          modalOpen={() => [open, setOpen]} dishId={dishId}
          onDialogClose={handleDialogClose}
        />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < products.length}
                  checked={selected.length === products.length}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(products.map((row) => row.id));
                    } else {
                      setSelected([]);
                    }
                  }}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : products
            ).map((row) => (
              <TableRow key={row._id} hover onClick={(event) => handleSelect(event, row._id)}>
                <TableCell padding="checkbox">
                  <Checkbox checked={selected.indexOf(row._id) !== -1} />
                </TableCell>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <img src={`dishes/${row.image}`} height="50px" width="50px" />
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>Rs.{row.price}</TableCell>
                <TableCell>
                  <Chip label="Remove User" color="error" onDelete={() => handleRemoveDish(row._id)} />
                  <Chip label="Update Dish" color="success" icon={<EditCalendarIcon />} onClick={() => handleDishUPdate(row._id)} />
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
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Paper>
    </div>
  );
}
