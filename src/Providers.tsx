import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children?: ReactNode;
};

const Providers = ({children}: Props) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Providers;
