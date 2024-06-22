/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Button, { BtnType } from './components/base/Button';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button title="点击1" onClick={() => { console.log('点击1'); }}></Button>
      <Button title="点击2" type={BtnType.second} onClick={() => { console.log('点击2'); }}></Button>
      <Button title="点击3" type={BtnType.second} onClick={() => { console.log('点击3'); }} isDisabled={true}></Button>
      <Button title="点击4" isDisabled={true} onClick={() => { console.log('点击4'); }}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
