import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwitchColor } from '../lib';

storiesOf('SwitchColor', module)
  .add('Simple div', () => (
    <SwitchColor colors={['DarkKhaki', 'DarkOrange']}>
      {(color, onClick) => {
        return (
          <div
            onClick={onClick}
            style={{ backgroundColor: color, textAlign: 'center', width: 250 }}
          >
            Click me! -- {color}
          </div>
        );
      }}
    </SwitchColor>
  ))
  .add('Button', () => (
    <SwitchColor colors={['DarkCyan', 'DarkGoldenRod']}>
      {(color, onClick) => {
        return (
          <div style={{ textAlign: 'center', width: 250 }}>
            <div
              style={{
                backgroundColor: color,
                width: 250,
                textAlign: 'center'
              }}
            >
              {color}
            </div>
            <button onClick={onClick}>Click me!</button>
          </div>
        );
      }}
    </SwitchColor>
  ));
