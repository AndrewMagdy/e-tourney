import React from "react";
import { Provider } from "react-redux";
import RootRouter from "./routes/";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/configureStore";
import AppGrid from "./components/AppGrid.component";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./constants/theme";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <AppGrid>
            <RootRouter />
          </AppGrid>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
