import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-th/react'

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        size: 'md',
        children:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, autem dolorum. Iusto deleniti veniam modi facilis quia ut quam voluptatem provident, incidunt, alias sunt. Veritatis error ipsa iste tempora iure.',
    },
    argTypes: {
        size: {
          options: [
            'xxs',
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '4xl',
            '5xl',
            '6xl',
            '7xl',
            '8xl',
            '9xl',
          ],
          control: {
            type: 'inline-radio',
          },
        },
      },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
      children: 'Strong text',
      as: 'strong',
    },
}