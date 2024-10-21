import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.getStartedContainer}>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    //marginHorizontal: 10,
  }
});
