import { Config } from 'tailwindcss';

const preset: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfcff',
          100: '#d6f7ff',
          200: '#b6f4ff',
          300: '#84efff',
          500: '#20c9ff',
          600: '#08afff',
          DEFAULT: '#029cfd',
          800: '#0977c4',
          900: '#0e639a'
        },
        secondary: {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffaf71',
          DEFAULT: '#ff7f32',
          500: '#fe6011',
          600: '#ef4607',
          700: '#c63108',
          800: '#9d280f',
          900: '#7e2410'
        }
      }
    }
  }
};

export default preset;
