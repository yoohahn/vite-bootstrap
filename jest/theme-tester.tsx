import * as React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const WithProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme();
  return (
    <StyledEngineProvider>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{<MemoryRouter>{children}</MemoryRouter>}</EmotionThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

const themeRender = (ui: React.ReactElement<any>, options?: Omit<RenderOptions, "queries">) =>
  // @ts-ignore
  render(ui, { wrapper: WithProvider, ...(options || {}) });

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { themeRender as render };
export { render as testLibraryRenderer };
