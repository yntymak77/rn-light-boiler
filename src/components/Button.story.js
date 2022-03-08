import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';

storiesOf('Button', module)
  .add('Button', () => {
    const label = 'Hello Button';
      return (
        <Button>
          <Text>{label}</Text>
        </Button>
      )
  })
  .add('Button new text', () => {
    const label = 'Hi, text';
      return (
        <Button>
          <Text>{label}</Text>
        </Button>
      )
  })
;
