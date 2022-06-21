import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";
export const useStyles = makeStyles({
  paper: {
    padding: "30px 30px",
    maxWidth: 400,
    backgroundColor: "#f5f7f6",
  },
  modal: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 5,
    padding: 40,
    gap: 10,
  },
  info: {
    marginTop: theme.spacing(2),
  },
});
