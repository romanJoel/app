import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClubesScreen from './ClubesScreen';
import Sportivo from './Sportivo';
import Union from './Union';






const Clubes = ({ route }: any) => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
      <View style={styles.contenedor}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'#8ECEEB',
          },
          headerTitleAlign:'center',
          headerTintColor:'#194761'
        }}
        
        >
          <Stack.Screen name="Clubes" component={ClubesScreen} />
          <Stack.Screen 
            name="Sportivo"
            component={Sportivo}
          />
          <Stack.Screen 
             name="Union" 
             component={Union}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Clubes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:100,
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor: {
    width: '100%',
    flex: 1,
  },
});
