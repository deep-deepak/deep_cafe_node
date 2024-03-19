import React, { useState } from 'react'
import { Box, TextField, Dialog, Grid, DialogTitle, DialogActions, DialogContent, Button, IconButton } from '@mui/material'
import { signupUser } from '../service/user';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';

export default function AddUser({ isLoading }) {

    const [loading, setLoading] = isLoading();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    

    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (!formData.firstName) {
            toast.error("First Name is required!");
            return;
        }
        if (!formData.lastName) {
            toast.error("Last Name is required!");
            return;
        }
        if (!formData.email) {
            toast.error("Email is required!");
            return;
        }
        if (!formData.password) {
            toast.error("Password is required!");
            return;
        }
        try {
            setLoading(!loading)
            const res = await signupUser(formData);
            if (res.status) {
                setLoading(true)
                toast.success("Add User Successfully!");
                setOpen(false)
                return
            }
            toast.error(res.message)
            // setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.success("Something went wrong!")

        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // Close dialog handler
    const handleClose = () => {
        setOpen(false);
    };




    return (
        <div>
            <Button variant="contained" color="primary" style={{ margin: '10px 0 0 70%' }} onClick={handleOpen}>Create New User</Button>
            <Dialog open={open}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <DialogTitle>Create New User </DialogTitle>
                    <IconButton onClick={handleClose}><CloseIcon /> </IconButton>
                </div>
                <DialogContent>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCreateUser} variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
