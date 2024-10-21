import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import educacionScreen from './EducacionScreen';
import Babataky from './Babataky';
import PrimariaFiscal from './PrimariaFiscal';
import PrimariaJustina from './PrimariaJustina';
import PrimerosPasos from './PrimerosPasos';
import SecundariaJorge from './SecundariaJorge';
import SecundariaJustina from './SecundariaJustina';

 


const Educacion = ({ route }: any) => {
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
          <Stack.Screen name="Educacion" component={educacionScreen} />
          <Stack.Screen 
            name="Jardin Maternal Primeros Pasos"
            component={PrimerosPasos}
          />
          <Stack.Screen 
             name="Jardin Babataky" 
             component={Babataky}
          />
          <Stack.Screen 
             name="Primaria Santa Justina" 
             component={PrimariaJustina}
          />
           <Stack.Screen 
             name="Primaria Fiscal" 
             component={PrimariaFiscal}
          />
           <Stack.Screen 
             name="Secundaria Santa Justina" 
             component={SecundariaJustina}
          />
           <Stack.Screen 
             name="Secundaria Jorge Newbery" 
             component={SecundariaJorge}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
};

export default Educacion;

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
