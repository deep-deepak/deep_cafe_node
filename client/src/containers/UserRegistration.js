import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserRegister() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const navigate = useNavigate()

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

    const handleSubmit = async () => {
        try {
            if (!formData.firstname) {
                toast.error("First name is required!")
                return;
            }
            if (!formData.lastname) {
                toast.error("Last name is required!")
                return;
            }
            if (!formData.email) {
                toast.error("Email is required!")
                return;
            }
            if (!formData.password) {
                toast.error("Password is required!")
                return;
            }
            if (!formData.confirmpassword) {
                toast.error("Confirm Password is required!");
                return;
            }
            if (formData.password !== formData.confirmpassword) {
                toast.error("password don't match");
                return;
            }
            const result = await axios.post('http://localhost:5000/api/users/register', { formData: formData });
            if (result) {
                if (result.data.status === true) {
                    toast.success("regitser successfull")
                } else {
                    toast.error(result.data.message || "Something went wrong")
                }
            }
        } catch (error) {
            toast.error(error || "Something went wrong")
        }
    }

    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-md-6 d-none d-md-flex bg-image"></div>
                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">User Register!</h3>
                                            <p className="text-muted mb-4">Please create an Account.</p>
                                            <form>
                                                <TextField
                                                    name='firstname'
                                                    type='text'
                                                    label="First Name"
                                                    variant="outlined"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    autoComplete="off"
                                                    placeholder='Enter Your First Name..'
                                                    inputProps={{ style: { fontSize: 15, color: 'black' } }}
                                                    InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                                                />

                                                <TextField
                                                    name='lastname'
                                                    type='text'
                                                    label="Last Name"
                                                    variant="outlined"
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    autoComplete="off"
                                                    placeholder='Enter your Last Name'
                                                    inputProps={{ style: { fontSize: 15, color: 'black' } }}
                                                    InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                                                />

                                                <TextField
                                                    name='email'
                                                    type='email'
                                                    label="Email"
                                                    variant="outlined"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    autoComplete="off"
                                                    placeholder='Enter your Email'
                                                    inputProps={{ style: { fontSize: 15, color: 'black' } }}
                                                    InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                                                />

                                                <TextField
                                                    name='password'
                                                    type='password'
                                                    label="Password"
                                                    variant="outlined"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    autoComplete="off"
                                                    placeholder='Enter your Password'
                                                    inputProps={{ style: { fontSize: 15, color: 'black' } }}
                                                    InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                                                />

                                                <TextField
                                                    name='confirmpassword'
                                                    type='password'
                                                    label="Confirm Password"
                                                    variant="outlined"
                                                    value={formData.confirmpassword}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    autoComplete="off"
                                                    placeholder='Enter your Confirm Password'
                                                    inputProps={{ style: { fontSize: 15, color: 'black' } }}
                                                    InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                                                />

                                                <Button variant="contained" sx={{ marginTop: '15px' }} onClick={handleSubmit}>Sign Up</Button>
                                            </form>
                                            <Typography variant='p'>Have An Account
                                                <Button onClick={() => navigate('/login')}>Login </Button>
                                            </Typography>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UserRegister