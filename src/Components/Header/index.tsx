import React, { useEffect } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useStyles } from "./style";
import { useLocation } from "react-router-dom";
import { clearStorage, getUserData as getUserDataRequest, loginRedirectPrivider, logout } from "../../services/auth";
import { nameSplitOne } from "../../utils/nameFormat";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../store/reducer";

export default function Header(): JSX.Element {

  const [ { user }, dispatch ] = useStateValue();
  const classes = useStyles();
  const location = useLocation();
  const token: string | null = localStorage.getItem("gov_access_token_sso");
  const tokenSiseci: string | null = localStorage.getItem(
    "gov_access_token_siseci"
  );

  const loginRedirect = () => {
    const { pathname } = location;
    loginRedirectPrivider(pathname);
  };

  const logoutUser = () => {
    logout();
  };


   const getUserData = async (tokenSso: string, tokenSiseciReceive: string) => {
    try {
      const data = await getUserDataRequest(tokenSso, tokenSiseciReceive);

      dispatch({
        type: actionTypes.SET_USER,
        user: data,
      });

      localStorage.setItem('gov_user_data', JSON.stringify(data));
    } catch (err) {
      clearStorage();
      console.log(err);
    }
  };


  useEffect(() => {
    if (token && tokenSiseci) {
      getUserData(token, tokenSiseci);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {user && nameSplitOne(user?.nome?.toLowerCase())}
          </Typography>

          {user ? (
            <Button color="inherit" onClick={logoutUser}>
              Sair
            </Button>
          ) : (
            <Button color="inherit" onClick={loginRedirect}>
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
