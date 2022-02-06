import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Routes
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ToDo from "./pages/ToDo";

import theme from "./theme";
import DevInfo from "./components/DevInfo";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/todo' element={<ToDo />} />
        </Routes>
      </Router>
      <DevInfo />
    </ThemeProvider>
  );
};

export default App;
