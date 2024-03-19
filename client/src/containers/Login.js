import React, { useState } from 'react'
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../service/user';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const hndleSubmitData = async () => {
    try {
      if (!email) {
        toast.error("Email is required!")
        return;
      }
      if (!password) {
        toast.error("Password is required!")
        return;
      }
      const result = await loginUser({ email, password });
      if (result) {
        if (result.status) {
          toast.success("Login successfully!");
          const token = tokenGenerate(result.data);
          if (token) {
            localStorage.setItem("token", token);
            navigate('/menu')
            clearField()
            window.location.reload();
            return
          }
        }
        toast.error(result.message)
      }
    } catch (error) {
      toast.error(error || "Something went wrong")
    }
  }


  const tokenGenerate = (payload) => {
    return btoa(JSON.stringify(payload)); // Simulated JWT encoding
  };

  const clearField = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">user Login!</h3>
                    <p className="text-muted mb-4">Login the user and see your details.</p>
                    <form>
                      <TextField
                        type='email'
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        autoComplete="off"
                        placeholder='Enter Your Email..'
                        inputProps={{ style: { fontSize: 15, color: 'black' } }}
                        InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                      />

                      <TextField
                        type='password'
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        autoComplete="off"
                        placeholder='Enter your Password'
                        inputProps={{ style: { fontSize: 15, color: 'black' } }}
                        InputLabelProps={{ style: { fontSize: 15, color: "black" } }}
                      />
                      <Button variant="contained" sx={{ marginTop: '15px' }} onClick={hndleSubmitData}>Login</Button>
                    </form>
                    <Typography variant='p'>Haven't Account
                      <Button onClick={() => navigate('/register')}>Sign up </Button>
                    </Typography>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
