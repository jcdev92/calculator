import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../screen/appTheme';

interface Props {
  text: string;
  color?: string;
  width?: boolean;
  action?: (textNumber: string) => void;
}

export const ButtonCalc = ({text, color, width = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={action}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 160 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
