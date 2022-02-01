import "@emotion/react";
import "@emotion/react/types/css-prop";
import type { Theme as MuiTheme } from "@mui/material";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}
