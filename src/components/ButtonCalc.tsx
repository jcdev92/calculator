import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../screen/appTheme';

interface Props {
  text: string;
  color?: string;
  width?: boolean;
}

export const ButtonCalc = ({text, color, width = false}: Props) => {
  return (
    <TouchableOpacity>
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
