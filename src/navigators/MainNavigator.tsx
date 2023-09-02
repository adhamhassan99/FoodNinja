import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens';

const MainStack = createNativeStackNavigator();
type Props = {};

const MainNavigator = (props: Props) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="splash" component={SplashScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
