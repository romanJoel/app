import React from "react";
import { NavigationContainer, useNavigation, DrawerActions } from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

import Home from '../../pantallas/home/Home';
import { FontAwesome } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Entypo'
import Header from "../../components/cardHeader/Header";
import { View } from "react-native";
import { Transporte,
          Salud,
          Oficios,
          Profesionales,
          Instituciones,
          Comercios,
          Clubes,
          Comuna,
          Educacion
} from "../../categorias/import/Import";
import Configuracion from "../../pantallas/Configuracion/Configuracion";
import TelefonosScreen from "../../pantallas/Telefonos utiles/TelefonosScreen";





const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

 const commonScreenOptions: NativeStackNavigationOptions = {
    statusBarColor: '#54B5DE',
    headerStyle: {
      backgroundColor: '#fff',// Color del header
      
    },
    headerTintColor: '#54B5DE',
    headerTitleAlign: 'center',
    headerTitleStyle:{
      fontSize:50,
    },
    
    headerLeft: () => (
      <Icon
        name="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        size={50}
        color="#000"
      />
    ),
  };

   return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name="Alvarez" component={Home} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Transporte" component={Transporte} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Salud" component={Salud} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Comercios" component={Comercios} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Instituciones" component={Instituciones} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Oficios" component={Oficios} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Profesionales" component={Profesionales} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Clubes" component={Clubes} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Comuna" component={Comuna} options={{ title: 'Alvarez' }} />
      <Stack.Screen name="Educacion" component={Educacion} options={{ title: 'Alvarez' }} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView>
      <Header />
      <View style={{ marginTop: 20 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const MainScreenOptions = {
  //headerTitle: 'Alvarez-app',
  headerStyle: {   
    backgroundColor: '#54B5DE',
  },
  headerTintColor: '#fff',
  
};

const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator 
      screenOptions={{
        ...MainScreenOptions,
        headerShown:false,
        drawerStyle: {
        backgroundColor: '#D9D9D9',
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      
      <Drawer.Screen 
        name="Home" 
        component={StackNav}
      options={{
        ...MainScreenOptions,
        headerTitleAlign:'center',
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen 
         name="Configuracion" 
         component={Configuracion} 
         options={{
          ...MainScreenOptions,
          headerTitleAlign:'center',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}/>
      <Drawer.Screen 
      name="Telefonos utilies" 
      component={TelefonosScreen}
      options={{
        ...MainScreenOptions,
        headerTitleAlign:'center',
        headerShown: true,
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="phone" color={color} size={size} />
          ),
          title: 'Telefonos utiles',
      }}/>
    
    </Drawer.Navigator>
  )
}

const TabLayout =()=>{
  

  return(
    <NavigationContainer independent={true}>
      <DrawerNav/>
    </NavigationContainer>
  )
}

export default TabLayout; 

