import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import GlobalStyle from "./globalStyles";
import NavBar from "./components/NavBar/NavBar";
import Projetos from "./pages/Projetos/Projetos";

import theme from "./theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
