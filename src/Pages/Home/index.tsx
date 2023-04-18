import React from "react";
import { Typography, Container } from "@material-ui/core";
import { nameSplitTwo } from "../../utils/nameFormat";
import { useStyles } from "./style";
import { useStateValue } from "../../providers/StateProvider";

export default function Home(): JSX.Element {
  const classes = useStyles();
  const [{ user }] = useStateValue();
  return (
    <>
      <Container className={classes.main}>
        <Typography>
          {user && `Bem vindo, ${nameSplitTwo(user?.nome?.toLowerCase())}`}
        </Typography>
      </Container>
    </>
  );
}
