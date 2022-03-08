import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';
import FakeViewContainer from "../fake/FakeViewContainer";

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: FakeViewContainer,
      navigationOptions: {
        header: null
      },
    }
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
    }),
  },
);

export default createAppContainer(stackNavigator);
