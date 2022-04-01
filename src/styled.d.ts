import { myTheme } from './styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends myTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
