import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { checkboxClasses, Grid } from "@mui/material";
import { useStyles } from "./loan-card.styles";
import LoanModal from "../loan-modal/loan-modal";

const LoanCard = ({ loan, amount, setAmount }) => {
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState(loan.available);
  const [invested, setInvested] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <Grid container direction="row">
        <Grid item xs={9} sm={9}>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">
                <strong>{loan.title}</strong>
              </Typography>
            </Grid>
            <Grid container direction="row" className={classes.info}>
              <Grid item xs={9} sm={9}>
                <Typography variant="body1">
                  {" "}
                  Amount availiable: ${available}{" "}
                </Typography>
                <Typography>tranche: {loan.tranche}</Typography>
                <Typography>
                  Annualised return: {loan.annualised_return}
                </Typography>
                <Typography>LTV: {loan.ltv}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={3} sm={3}>
          <CardActions>
            <Grid container className={classes.actions} direction="column">
              <Grid item>
                {invested === true && (
                  <Typography align="right" variant="caption">
                    {" "}
                    Invested
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  size="large"
                  onClick={handleOpen}
                  color="primary"
                  variant="contained"
                >
                  Invest
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>

      <LoanModal
        loan={loan}
        open={open}
        handleClose={handleClose}
        amount={amount}
        setAmount={setAmount}
        available={available}
        setAvailable={setAvailable}
        setInvested={setInvested}
      />
    </Card>
  );
};

export default LoanCard;
