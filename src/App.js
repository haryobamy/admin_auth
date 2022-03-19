import "./App.css";
import { BrowserRouter } from "react-router-dom";

import HearderComponent from "./Components/Header/HearderComponent";
import Footer from "./Components/Footer";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Components/Login";

const theme = createTheme({
  // status: {
  //   danger: orange[500],
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <HearderComponent />;
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
