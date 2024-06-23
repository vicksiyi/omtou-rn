/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  LogBox,
  Animated
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Show from './Page/First/Show';
import Login from './Page/Login/Index';
import Start from './Page/First/Start';
import Privacy from './Page/Login/Privacy';
import BackHeader from './Components/Base/BackHeader';
import PhoneNumberLogin from './Page/Login/Phone';
import VerifyPhoneCode from './Page/Login/VerifyPhoneCode';
import WelCome from './Page/WelCome';

/**
 * fix warning
 * [Sending `onAnimatedValueUpdate` with no listeners registered.]
 */
const av = new Animated.Value(0);
av.addListener(() => { return });


const Stack = createStackNavigator();
/**
 * 返回上一页配置
 */
const backHeaderOption = {
  headerLeft: () => <BackHeader />,
  headerStyle: {
    elevation: 0,
  },
  headerShown: true,
  headerTransparent: true,
  headerTitle: ''
}

/**
 * 页面配置
 */
const pages = [
  {
    name: 'Show',
    component: Show,
    option: { headerShown: false }
  },
  {
    name: 'Start',
    component: Start,
    option: { headerShown: false }
  },
  {
    name: 'Login',
    component: Login,
    option: backHeaderOption
  },
  {
    name: 'Privacy',
    component: Privacy,
    option: backHeaderOption
  },
  {
    name: 'PhoneNumberLogin',
    component: PhoneNumberLogin,
    option: backHeaderOption
  },
  {
    name: 'VerifyPhoneCode',
    component: VerifyPhoneCode,
    option: backHeaderOption
  },
  {
    name: 'WelCome',
    component: WelCome,
    option: { headerShown: false }
  }
];

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pages[0].name}
      >
        {
          pages.map((item, index) => <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.option}
          />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
