import React from 'react';
import {CalculatorScreen} from './src/screen/CalculatorScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/screen/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fond}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
