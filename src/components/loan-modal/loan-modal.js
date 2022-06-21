import {
  Grid,
  Button,
  TextField,
  Box,
  Card,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./loan-modal.styles";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const LoanModal = ({
  open,
  handleClose,
  loan,
  amount,
  setAmount,
  available,
  setAvailable,
  setInvested,
}) => {
  const classes = useStyles();
  const [investment, setInvesment] = useState(0);
  const days = Math.floor(parseInt(loan.term_remaining) / (3600 * 24));
  const handleClick = () => {
    setAmount(amount - investment);
    setAvailable(available - investment);
    setInvested(true);
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container className={classes.modal}>
        <Card className={classes.paper}>
          <Grid container direction="column" spacing={1}>
            <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
              <IconButton onClick={handleClose}>
                <ClearIcon />
              </IconButton>
            </Box>

            <Grid item xs={12} sm={12}>
              <Typography variant="h5">
                {" "}
                <strong> Invest in Loan</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography> {loan.title} </Typography>
            </Grid>
            <Grid item>
              <Typography> Amount availiable: {available} </Typography>
              <Typography>Loan ends in: {days} days </Typography>
            </Grid>
            <Grid item className={classes.info} xs={12} sm={12}>
              <Typography variant="h5">
                {" "}
                <strong>Investment amount </strong>{" "}
              </Typography>
            </Grid>
            <Grid container direction="row" spacing={10}>
              <Grid item>
                <TextField
                  name="amount"
                  value={investment}
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                  size="small"
                  onChange={(e) => setInvesment(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  size="medium"
                  onClick={handleClick}
                  variant="contained"
                >
                  INVEST
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Modal>
  );
};

export default LoanModal;
