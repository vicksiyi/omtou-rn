/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Show from './Page/First/Show';
import Login from './Page/Login/Index';
import Start from './Page/First/Start';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const curScreen = 'Show';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={curScreen}
      >
        <Stack.Screen
          name="Show"
          component={Show}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
