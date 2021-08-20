import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import Button from './../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  // <ThemeProvider theme={theme}>
  // <CssBaseline />
  <Button {...args} />
  // </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'text',
  children: 'Button'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button'
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   children: 'Button'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button'
// };
