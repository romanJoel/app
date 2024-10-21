// OficiosScreen.tsx
import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 
const OficiosScreen = (props: any)=> {
  console.log(props)
  return ( 
         <ScrollView style={{backgroundColor:'#fff', flex:1}} >
          <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Albañiles')}>
          <Text style={styles.text} >Albañiles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Plomeros')}>
          <Text style={styles.text} > Plomeros</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Gasistas')}>
          <Text style={styles.text} > Gasistas </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Gomerias')}>
          <Text style={styles.text} > Gomerias </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Mecanicos')}>
          <Text style={styles.text} > Mecanicos </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Desagotadores')}>
          <Text style={styles.text} > Desagotadores </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Acarreos')}>
          <Text style={styles.text} > Acarreos </Text>
         </TouchableOpacity>
      </View>
      </View>
  </ScrollView>
  );
}

export default OficiosScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    width:'100%',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around',
    paddingBottom: 4,
  },
  containerCard:{
    backgroundColor:'#fff',
    width:'90%',
    height:580,
    marginTop:'8%',
    alignItems:'center',
    gap:30,
    paddingTop:20,
  },
  categoryContainer: {
    width: 350,
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#194761'
  },
  contenedorCategorias:{
    height:600,
    width:'90%',
    alignItems:'center',
    marginVertical:25,
  }
});
