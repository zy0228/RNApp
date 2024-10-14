import React from 'react';
import { Text, StyleSheet, TouchableOpacity, type ButtonProps } from 'react-native';

interface CustomButtonProps extends ButtonProps {
  color?: string
  backgroundColor?: string
}

const DEFAULT_COLOR = 'white';
const DEFAULT_BACKGROUND_COLOR = 'black';

export default function Button(props: CustomButtonProps) {
  const { onPress, title = 'Save', backgroundColor, color } = props;

  console.log('sss', styles.button);

  return (
    <TouchableOpacity style={[{backgroundColor: backgroundColor || DEFAULT_BACKGROUND_COLOR}, styles.button]} onPress={onPress}>
      <Text style={[{color: color || DEFAULT_COLOR}, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
