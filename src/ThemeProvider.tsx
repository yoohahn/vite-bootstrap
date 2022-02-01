import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme();
  return (
    <StyledEngineProvider>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
