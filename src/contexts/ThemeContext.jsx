import { createContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { lightBlue, grey } from '@mui/material/colors';

export const themeSettings = mode => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
          primary: { main: lightBlue[400] },
          secondary: { main: '#041430' },
          neutral: {
            dark: grey[700],
            main: grey[500],
            light: grey[100]
          },
          text: { primary: grey[700] },
          background: { default: '#fffefb' }
        } : {
          primary: { main: '#757ce8' },
          secondary: { main: '#ff7961' },
          neutral: {
            dark: grey[700],
            main: grey[500],
            light: grey[100]
          },
          background: { default: grey[900] }
        }
      )
    }
  }
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
  
export const useMode = () => {
  const [mode, setMode] = useState('light');
  
  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark'),
  }), []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
}