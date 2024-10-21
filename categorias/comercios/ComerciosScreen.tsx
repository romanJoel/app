
import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


  
const ComerciosScreen = (props: any)=> {
  console.log(props)
  return ( 
    <View  style={{flex:1, backgroundColor:'#fff'}}>
         <ScrollView style={{backgroundColor:'#fff'}} >
          <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Kioskos')}>
          <Text style={styles.text} >Kioskos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Almacenes')}>
          <Text style={styles.text} > Almacenes</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Carnicerias')}>
          <Text style={styles.text} > Carnicerias </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Supermercados')}>
          <Text style={styles.text} > Supermercados </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Gimnasios')}>
          <Text style={styles.text} > Gimnasios </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Heladerias')}>
          <Text style={styles.text} > Heladerias </Text>
         </TouchableOpacity>
      </View>
      </View>
  </ScrollView>
      </View>
  );
}

export default ComerciosScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    width:'100%',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around'
    //padding: 10,
  },
  containerCard:{
    width:'90%',
    height:'auto',
    marginTop:'8%',
    alignItems:'center',
    gap:40,
    padding:10,
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
