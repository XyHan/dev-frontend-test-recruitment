export type ThemeType = 'light' | 'dark';

export interface ThemeManagerInterface {
  setTheme(element: HTMLElement, theme: ThemeType): void;
  theme: any;
}
