import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/navbar"
import Home from './pages/Home';
import About from './pages/About';
import HireUs from './pages/HireUs';
import Services from './pages/Services';
import Work from './pages/Work';
import "./App.css";

const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },

  navbar: {
    color: "transparent"
  },

  textarea: {
    margin: "10px",
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hire-us" element={<HireUs />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
