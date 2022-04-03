import { myTheme } from "./theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends myTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      base: string;
    };
  }
}
