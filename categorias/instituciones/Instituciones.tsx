import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Policia from './Policia';
import Agua from './Agua';
import Bancos from './Bancos';
import Bomberos from './Bomberos';
import Epe from './Epe';
import Religion from './Iglesias';
import Jubilados from './Jubilados';
import Mutuales from './Mutuales';
import InstitucionesScreen from './InstitucionesScreen';


const Instituciones = ({ route }: any) => {
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
          <Stack.Screen name="Instituciones" component={InstitucionesScreen} />
          <Stack.Screen 
             name="Policia" 
             component={Policia}
          />
          <Stack.Screen 
            name="Agua"
            component={Agua}
          />
          <Stack.Screen 
             name="Epe" 
             component={Epe}
          />
          <Stack.Screen 
             name="Bomberos" 
             component={Bomberos}
          />
           <Stack.Screen 
             name="Bancos" 
             component={Bancos}
          />
           <Stack.Screen 
             name="Mutuales" 
             component={Mutuales}
          />
           <Stack.Screen 
             name="Jubilados" 
             component={Jubilados}
          />
           <Stack.Screen 
             name="Religion" 
             component={Religion}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Instituciones;

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
  },
});
