import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const useStyles = makeStyles({
  paper: {
    padding: "5px 5px",
    maxWidth: 600,
    margin: "10px auto",
  },
  actions: {
    marginTop: theme.spacing(10),
  },
});
