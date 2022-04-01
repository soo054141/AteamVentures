import { myTheme } from "./theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends myTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      gray: string;
    };
  }
}
