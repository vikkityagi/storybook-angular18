import { Meta, StoryObj } from '@storybook/angular';
import { StoryBookComponent } from '../app/story-book/story-book.component';

const meta: Meta<StoryBookComponent> = {
  title: 'StoryBookComponent',
  component: StoryBookComponent,
};

export default meta;

const Template: StoryObj<StoryBookComponent> = {
  render: (args) => ({
    props: args,
  }),
};

// export const Default = Template.bind({});
export const Default: StoryObj<StoryBookComponent> = {
    ...Template,
    args: {
    //   mytext: 'Initial value',
    },
  };
