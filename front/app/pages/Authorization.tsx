import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Input,
  Button,
  FormControl,
} from "@mui/material";

const AuthForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="xs">
      <Paper elevation={5} style={{ backgroundColor: "#b3e5fc" }}>
        <Typography variant="h4" align="center">Авторизация</Typography>
        <FormControl>
          <Input
            label="Логин"
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            label="Пароль"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Войти
        </Button>
      </Paper>
    </Container>
  );
};

export default AuthForm;