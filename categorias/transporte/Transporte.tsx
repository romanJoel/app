import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Remises from './Remises';
import TransporteScreen from './TransporteScree';
import Colectivo from './Colectivo';


const Transporte = ({ route }: any) => {
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
          <Stack.Screen name="Transporte" component={TransporteScreen} />
          <Stack.Screen 
            name="Remises"
            component={Remises}
          />
          <Stack.Screen 
             name="Interbus" 
             component={Colectivo}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Transporte;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // height:100,
    marginVertical:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
});
