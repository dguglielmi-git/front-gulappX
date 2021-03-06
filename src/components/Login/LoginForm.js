import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm({
  enterPressed,
  handleChange,
  startLogin,
  loginError,
  loading,
  setNewUser,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre de usuario"
          name="username"
          autoFocus
          onChange={handleChange("username")}
          onKeyUp={enterPressed}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          onChange={handleChange("password")}
          onKeyUp={enterPressed}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={startLogin}
        >
          Entrar
        </Button>
        {!loginError && loading && <LinearProgress />}
        {loginError && (
          <span style={{ color: "red", marginBottom: "10px" }}>
            Usuario y contraseña incorrectos
          </span>
        )}
        <Grid container>
          <Grid item>
            <Link variant="body2" onClick={setNewUser}>
              Registrarse
            </Link>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
