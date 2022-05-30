import React, { useState } from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";


function Login() {

    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const login = async (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        navigate('/app/replist')
    }

    const paperStyle = { padding: 20, width: '40vh', height: '50vh', margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'rgba(184, 44, 44, 0.959)' }
    const textBoxStyle = { padding: 20 }

  return (
      <div className='logincontainer'>
          <div className='header_login'>
              <div className='app_name'>GoGrade</div>
          </div>
          <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}>
              <Paper elevation={10} style={paperStyle}>
                  <Grid align="center">
                      <Avatar style={avatarStyle}></Avatar>
                      <br></br><h2>Sign In</h2><br></br>
                  </Grid>
                  <div style={{ marginLeft: "10%", width: "80%", padding: "auto 5px" }}>
                      <TextField label='Username' placeholder="Enter Username" fullWidth required style={textBoxStyle} onChange={(e) => { setUsername(e.target.value) }}  />
                      <TextField label='Password' placeholder="Enter password" type="password" fullWidth required style={textBoxStyle} onChange={(e) => { setPassword(e.target.value) }} />
                      <Button type="submit" onClick={login} variant="contained"  style={{ backgroundColor: "rgba(184, 44, 44, 0.959)", margin: "10px" , color:"white",fontWeight:800}}>Sign In</Button>

                  </div>
              </Paper>
          </Grid>
      </div>
  )
}

export default Login