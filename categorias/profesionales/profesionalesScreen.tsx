
import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../components/footer/Footer';


  
const ProfesionalesScreen = (props: any)=> {
  console.log(props)
  return ( 
         <View style={{flex:1, backgroundColor:'#ff1'}}>
          <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Abogados')}>
          <Text style={styles.text} >Abogados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Contadores')}>
          <Text style={styles.text} > Contadores</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Inmobiliarios')}>
          <Text style={styles.text} > Inmobiliarios </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Seguros')}>
          <Text style={styles.text} > Seguros </Text>
         </TouchableOpacity>
      </View>
      </View>
         </View>
  );
}

export default ProfesionalesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingTop:12
    //padding: 10,
  },
  containerCard:{
    backgroundColor:'#fff',
    width:'90%',
    height:'auto',
    marginTop:20,
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
