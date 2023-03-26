// import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

function App() {
  // grabbing the state from the global mode
  const mode = useSelector((state) => {
    return state.global.mode;
  })
  // maybe problem here
  // passing the state to the createTheme, invoked whenever there is change in mode
  const theme = useMemo(() =>
    createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Routes>
            <Route  element = {<Layout />}>
              <Route path = "/" element = {<Navigate to={'/dashboard'} replace/>}/>
              <Route path = "/dashboard" element = {<Dashboard />}/>
            </Route>

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
