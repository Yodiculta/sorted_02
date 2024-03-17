
import { AccountCircle } from "@mui/icons-material"
import React from 'react';
import './AppHeaderBeforeLogin.module.css'
import Logo from "../logo/Logo";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function AppHeaderBeforeLogin() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      p: 1,
      m: 1,
      marginLeft: '10vw',
      bgcolor: 'background.paper',
      width: '60vw',
      // gap: '20vw',
      borderRadius: 1,
      alignItems: 'center',

    }}>

      <Link to='/login' className='section'>
        <Logo />
      </Link>

      {/* <div className='item'>
          <Link to='/list' className='section'>
            Поиск траектории
          </Link>
        </div> */}
      <Link to='/team' className='section'>
        Команда
      </Link>
    </Box>
  )
}

export default AppHeaderBeforeLogin;