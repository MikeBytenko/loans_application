import React, { useState } from "react";
import LoanCard from "../../components/loan-card/loan-card";
import data from "../../assets/current-loans.json";
import { Typography, AppBar, Toolbar, Box, Grid } from "@mui/material";
import { useStyles } from "./home-page.styles";

const HomePage = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(parseInt(data[0].amount));
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h4">Current Loans</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          {data &&
            data.map((loan) => (
              <LoanCard
                key={loan.id}
                loan={loan}
                amount={amount}
                setAmount={setAmount}
              />
            ))}
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={32}>
            <Grid item>
              <Typography>
                {" "}
                <strong>Total amount availiable for investment </strong>{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <strong>${amount} </strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
