import { fn } from '@storybook/test';

import Dropdown from '../dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    className: 'bg-secondary text-[white] rounded-md',
    items: ['TEST1', 'TEST2', 'TEST3']
  }
};

export const xs = {
  args: {
    size: 'xs',
    value: 'xs size'
  }
};
export const sm = {
  args: {
    size: 'sm',
    value: 'sm  size'
  }
};
export const md = {
  args: {
    size: 'md',
    value: 'md size'
  }
};
export const lg = {
  args: {
    size: 'lg',
    value: 'lg size'
  }
};
export const xl = {
  args: {
    size: 'xl',
    value: 'xl size'
  }
};
