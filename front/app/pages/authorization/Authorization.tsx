import React, { useState } from "react";
import {
  Box,
} from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import Img from "../../components/LoginForm/Img";
import './Authorization.module.css'
import AppHeaderBeforeLogin from "../../components/appHeaderBeforeLogin/AppHeaderBeforeLogin";

const AuthForm = () => {

  return (
    <Box>
      <AppHeaderBeforeLogin />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          width: '90vw',
          borderRadius: 1,
          alignItems: 'flex-start'
        }}>
        <Box >
          <h1>Sorting hat</h1>
          < Img />

        </Box>

        <Box>
          <LoginForm />
        </Box>
      </Box>
    </Box>


  );
};


export default AuthForm;
