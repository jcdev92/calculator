import {Text, View} from 'react-native';
import {styles} from '../screen/appTheme';

export const ButtonCalc = ({text}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};
