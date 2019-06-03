import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiBackdrop: {
      root: {
        background:
          "linear-gradient(0deg, rgba(38,50,56,1) 12%, rgba(0,0,0,1) 100%)"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#263238"
      }
    }
  }
});

export default theme;
