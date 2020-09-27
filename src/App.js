import React, { Component } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#2E7D32",
    },
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Routes />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
