import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import NavBar from './pages/navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <NavBar />
        <Home />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;