import type { Config } from 'tailwindcss'
import sharedConfig from '@lvc/config-tailwind'
const config: Pick<Config, 'content' | 'presets' | 'prefix'> = {
  presets: [sharedConfig],
  content: ['./src/**/*.tsx', './src/*.tsx']
}
export default config
