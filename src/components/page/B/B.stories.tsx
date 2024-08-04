import type { Meta, StoryObj } from '@storybook/react';
import B from './B';

const meta = {
  title: 'page/B',
  component: B,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof B>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
