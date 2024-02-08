import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';


function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginUser, setLoginUser] = useState({})
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const userLogin = localStorage.getItem("loginuser")
    setLoginUser(JSON.parse(userLogin));
  })

  const handleLogout = () => {
    localStorage.removeItem("loginuser");
    navigate("/")
  }


  return (
    <section className="navbardiv">
      <nav className="navbar">
        <Link to="/">
          <img src="images/deepcafe.png" height="150px" style={{ marginTop: "-20px" }} alt="" />
        </Link>
        <ul>
          <li className=""> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li className=""> <Link to="/menu">Menu</Link> </li>
          <li className=""> <Link to="/services">Services</Link></li>
          <li className=""> <Link to="/gallery">Gallery </Link></li>
          <li className=""> <Link to="/contactus">Contact Us</Link></li>
          {loginUser ? (
            <li className="">
              <Tooltip title="Account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem >
                  <ListItemIcon>
                    <EditNoteOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  Edit Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>

              </Menu>
            </li>
          ) : (
            <li className=""> <Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </section>
  );
}

export default Header;