import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function AdminLogin({ isLoading }) {

    const [loading, setLoading] = isLoading();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username) {
            toast.error("Username is required");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }
        // Simulated authentication (for demonstration only)
        if (username === 'admin@gmail.com' && password === 'admin@123') {
            setLoading(!loading)
            const token = jwt_encode({ username, password });
            localStorage.setItem('Admintoken', token);
        } else {
            // Authentication failed
            toast.error("Invalid credential")
            setLoading(false)
            console.log('Authentication failed');
        }
    };

    const jwt_encode = (payload) => {
        return btoa(JSON.stringify(payload)); // Simulated JWT encoding
    };




    return (
        <Container maxWidth="xs">
            <Box mt={5}>
                <Typography variant="h4" align="center">Admin Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Box mt={2}>
                        <Link component={RouterLink} to="/forgot-password" variant="body2">
                            Forgot Password?
                        </Link>

                    </Box>
                </form>
            </Box>
        </Container>
    )
}
