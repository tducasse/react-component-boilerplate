import React from 'react';
import { storiesOf } from '@storybook/react';
import { MyComponent } from '../lib';

storiesOf('MyComponent', module)
  .add('DarkKhaki-DarkOrange', () => (
    <MyComponent firstColor="DarkKhaki" secondColor="DarkOrange" />
  ))
  .add('DarkCyan - DarkGoldenRod', () => (
    <MyComponent firstColor="DarkCyan" secondColor="DarkGoldenRod" />
  ));
