import type { Meta, StoryObj } from '@storybook/react';
import A from './A';

const meta = {
  title: 'page/A',
  component: A,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
