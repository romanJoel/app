import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AbogadosInfo,
  ContadoresInfo,
  InmobiliariosInfo,
  SegurosInfo,
} from "../import/importProfesionales"
import profesionalesScreen from './profesionalesScreen';
import ProfesionalesScreen from './profesionalesScreen';
 


const Profesionales = ({ route }: any) => {
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
          headerTintColor:'#194761',
        }}
        
        >
          <Stack.Screen name="Profesionales" component={ProfesionalesScreen} />
          <Stack.Screen 
            name="Abogados"
            component={AbogadosInfo}
          />
          <Stack.Screen 
             name="Contadores" 
             component={ContadoresInfo}
          />
          <Stack.Screen 
             name="Inmobiliarios" 
             component={InmobiliariosInfo}
          />
           <Stack.Screen 
             name="Seguros" 
             component={SegurosInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Profesionales;

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
