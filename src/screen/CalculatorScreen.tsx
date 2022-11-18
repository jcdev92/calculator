import {Text, View} from 'react-native';
import {styles} from './appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  return (
    <View>
      <Text style={styles.smallResults}>1.500,00</Text>
      <Text style={styles.results}>1.500,00</Text>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="C" />
        <ButtonCalc text="+/-" />
        <ButtonCalc text="del" />
        <ButtonCalc text="/" />
      </View>
    </View>
  );
};
