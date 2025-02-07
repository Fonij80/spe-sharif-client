import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HomePage } from './pages';
import { lightTheme, darkTheme } from './theme';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/login" element={<LoginPage />} />
              <Route path="/reserve" element={<ReservationPage />} />
              <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
