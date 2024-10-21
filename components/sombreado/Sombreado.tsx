import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface SombreadoProps extends TextProps {
  children: ReactNode;
}

const Sombreado: React.FC<SombreadoProps> = ({ children, style, ...restProps }) => {
  return (
    <Text style={[styles.texto, style]} {...restProps}>
      {children}
    </Text>
  );
};

const baseTextShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
};

const styles = StyleSheet.create({
  texto: {
    ...baseTextShadow,
    fontSize: 18,
    color: 'black',
  },
});

export default Sombreado;
