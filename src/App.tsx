/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Routes
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ToDo from "./pages/ToDo";

import theme from "./theme";
import { ToDoProvider } from "./store/ToDoContext";
import DevInfo from "./components/DevInfo";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToDoProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<ToDo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <DevInfo />
      </ToDoProvider>
    </ThemeProvider>
  );
};

export default App;
