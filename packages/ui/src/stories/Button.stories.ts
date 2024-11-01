import { fn } from '@storybook/test'

import Button from '../button'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { className: 'bg-secondary text-[white] rounded-md' }
}

export const xs = {
  args: {
    size: 'xs',
    children: 'xs size'
  }
}
export const sm = {
  args: {
    size: 'sm',
    children: 'sm  size'
  }
}
export const md = {
  args: {
    size: 'md',
    children: 'md size'
  }
}
export const lg = {
  args: {
    size: 'lg',
    children: 'lg size'
  }
}
export const xl = {
  args: {
    size: 'xl',
    children: 'xl size'
  }
}
