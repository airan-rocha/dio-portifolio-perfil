import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}