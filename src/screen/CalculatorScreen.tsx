import {Text, View} from 'react-native';
import {styles} from './appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    numb,
    lastNumb,
    clean,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = useCalculator();

  return (
    <View>
      {lastNumb !== '0' && <Text style={styles.smallResults}>{lastNumb}</Text>}
      <Text style={styles.results} numberOfLines={1} adjustsFontSizeToFit>
        {numb}
      </Text>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="7" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="8" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="9" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="4" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="5" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="6" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc text="1" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="2" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="3" color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.buttonRow}>
        {/* Buttons */}
        <ButtonCalc
          text="0"
          color="#2D2D2D"
          width={true}
          action={buildNumber}
        />
        <ButtonCalc text="." color="#2D2D2D" action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

// Dark Gray: #2D2D2D
// Orange: #FF9427
// Light Gray: #9B9B9B
