import themes from '../assets/styles/themes';

declare module 'styled-components' {
  type ThemeType = typeof themes.light;
  export interface DefaultTheme extends ThemeType { }
}
