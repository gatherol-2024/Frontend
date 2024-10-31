import type { Config } from 'tailwindcss'
import sharedConfig from '@lvc/config-tailwind'
const config: Pick<Config, 'content' | 'presets'> = {
  presets: [sharedConfig],
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx'
  ]
}
export default config
