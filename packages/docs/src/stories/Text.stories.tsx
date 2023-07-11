import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, autem dolorum. Iusto deleniti veniam modi facilis quia ut quam voluptatem provident, incidunt, alias sunt. Veritatis error ipsa iste tempora iure.',
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
      children: 'Strong text',
      as: 'strong',
    },
}