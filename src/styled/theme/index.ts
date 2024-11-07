import "styled-components/native";
import { DefaultTheme } from "styled-components";

export type colors = {
  primary: string;
  secondary: string;
  white: string;
  error: string;
  transparent: string;
  black: string;
  green: string;
};
export type spaces = {
  header: number;
};
export type fonts = {
  // questrial: string;
};
export type fontSize = {
  medium: number;
  button: number;
  small: number;
  warning: number;
  span: number;
  title: number;
  large: number;
};
declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: colors;
    spaces: spaces;
    fonts: fonts;
    fontSize: fontSize;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#272627",
    secondary: "#212020",
    white: "#FFFFFF",
    error: "#ED4337",
    transparent: "transparent",
    black: "#121213",
    green: "#369877",
  },
  spaces: {
    header: 56,
  },
  fonts: {
    // questrial: "Questrial_400Regular",
  },
  fontSize: {
    medium: 20,
    button: 30,
    small: 18,
    warning: 14,
    span: 15,
    title: 49,
    large: 27,
  },
};
