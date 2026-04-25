import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface SimplePaletteColorOptions {
    [key: number]: string;
  }

  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }

  interface TypeBackground {
    light: string;
  }
}