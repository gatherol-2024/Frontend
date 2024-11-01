import { Config } from 'tailwindcss'

const preset: Omit<Config, 'content'> = {
  theme: {
    colors: {
      primary: '#029CFD',
      secondary: '#FF7F32',
      white: '#FFF',
      black: '#000'
    },
    screens: {
      xs: '480px'
    }
  }
}

export default preset
