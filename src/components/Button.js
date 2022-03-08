// @flow
import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

type Props = {
  onPress: Function,
  children: any
}

export default (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    {props.children}
  </TouchableOpacity>
);

