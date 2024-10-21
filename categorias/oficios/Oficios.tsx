import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
         AlbañilesInfo,
          Plomerosinfo,
          GasistasInfo, 
          GomeriasInfo,
          MecanicosInfo,
          DesagotadoresInfo,
          AcarreosInfo        
} from '../import/importOficios';
import OficiosScreen from './oficiosScreen';
 


const Oficios = ({ route }: any) => {
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
          <Stack.Screen name="Oficios" component={OficiosScreen} />
          <Stack.Screen 
            name="Albañiles"
            component={AlbañilesInfo}
          />
          <Stack.Screen 
             name="Plomeros" 
             component={Plomerosinfo}
          />
          <Stack.Screen 
             name="Gasistas" 
             component={GasistasInfo}
          />
           <Stack.Screen 
             name="Gomerias" 
             component={GomeriasInfo}
          />
           <Stack.Screen 
             name="Mecanicos" 
             component={MecanicosInfo}
          />
           <Stack.Screen 
             name="Desagotadores" 
             component={DesagotadoresInfo}
          />
            <Stack.Screen 
             name="Acarreos" 
             component={AcarreosInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Oficios;

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
