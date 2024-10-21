import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
         KioskosInfo,
         AlmacenesInfo,
         CarniceriasInfo,
         SupermercadosInfo,
         GimnasiosInfo,
         HeladeriasInfo,
      } from "../import/importComercios"
import ComerciosScreen from './ComerciosScreen';

 
const Comercios = ({ route }: any) => {
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
          <Stack.Screen name="Comercios" component={ComerciosScreen} />
          <Stack.Screen 
            name="Kioskos"
            component={KioskosInfo}
          />
          <Stack.Screen 
             name="Almacenes" 
             component={AlmacenesInfo}
          />
          <Stack.Screen 
             name="Carnicerias" 
             component={CarniceriasInfo}
          />
           <Stack.Screen 
             name="Supermercados" 
             component={SupermercadosInfo}
          />
           <Stack.Screen 
             name="Gimnasios" 
             component={GimnasiosInfo}
          />
           <Stack.Screen 
             name="Heladerias" 
             component={HeladeriasInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Comercios;

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
