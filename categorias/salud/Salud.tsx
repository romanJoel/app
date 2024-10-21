import React from 'react';
import { View, StyleSheet } from 'react-native';
import Samco from './Samco';
import CardViewSanatorios from './CardViewSanatorios';

import SaludScreen from './SaludScreen';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Farmacias from './Farmacias';


const Salud = ({ route }: any) => {
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
          <Stack.Screen name="Salud" component={SaludScreen} />
          <Stack.Screen 
            name="Farmacias"
            component={Farmacias}
          />
          <Stack.Screen 
             name="Samco" 
             component={Samco}
          />
          <Stack.Screen 
             name="Sanatorios" 
             component={CardViewSanatorios}
          />

        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Salud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height:100,
    marginVertical:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor: {
    width: '100%',
    flex: 1,
    backgroundColor:'#fff'
  },
});
