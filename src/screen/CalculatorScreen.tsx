import {Text, View} from 'react-native';
import {styles} from './appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useState} from 'react';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('100');

  const clean = () => {
    setNumber('0');
  };

  return (
    <View>
      <Text style={styles.smallResults}>1.500,00</Text>
      <Text style={styles.results}>{number}</Text>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>

      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="7" color="#2D2D2D" />
        <ButtonCalc text="8" color="#2D2D2D" />
        <ButtonCalc text="9" color="#2D2D2D" />
        <ButtonCalc text="X" color="#FF9427" />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="4" color="#2D2D2D" />
        <ButtonCalc text="5" color="#2D2D2D" />
        <ButtonCalc text="6" color="#2D2D2D" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="1" color="#2D2D2D" />
        <ButtonCalc text="2" color="#2D2D2D" />
        <ButtonCalc text="3" color="#2D2D2D" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="0" color="#2D2D2D" width />
        <ButtonCalc text="." color="#2D2D2D" />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};

// Dark Gray: #2D2D2D
// Orange: #FF9427
// Light Gray: #9B9B9B
