
import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


 
const EducacionScreen = (props: any)=> {
  console.log(props)
  return ( 
    <View style={{backgroundColor:'#fff', flex:1}} >
         <ScrollView style={{backgroundColor:'#fff'}} >
          <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Jardin Maternal Primeros Pasos')}>
          <Text style={styles.text} >Jardin Maternal Primeros Pasos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Jardin Babataky')}>
          <Text style={styles.text} > Jardin Babataky</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Primaria Santa Justina')}>
          <Text style={styles.text} > Primaria Santa Justina </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Primaria Fiscal')}>
          <Text style={styles.text} > Primaria Fiscal </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Secundaria Santa Justina')}>
          <Text style={styles.text} > Secundaria Santa Justina </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Secundaria Jorge Newbery')}>
          <Text style={styles.text} > Secundaria Jorge Newbery </Text>
         </TouchableOpacity>
      </View>
      </View>
  </ScrollView>
  </View>
  );
}

export default EducacionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:600,
    width:'100%',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around',
    //padding: 10,
  },
  containerCard:{
    width:'90%',
    height:550,
    marginTop:'5%',
    alignItems:'center',
    gap:40,
    padding:12,
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
