import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




const InstitucionesScreen = (props: any)=> {
  console.log(props)
  return ( 
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView style={{ backgroundColor:'#fff'}} >
      <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Policia')}>
          <Text style={styles.text} > Policia </Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Agua')}>
          <Text style={styles.text} >Agua potable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Epe')}>
          <Text style={styles.text} > Epe </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Bomberos')}>
          <Text style={styles.text} > Bomberos </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Bancos')}>
          <Text style={styles.text} > Bancos </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Mutuales')}>
          <Text style={styles.text} > Mutuales </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Jubilados')}>
          <Text style={styles.text} > Jubilados </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Religion')}>
          <Text style={styles.text} > Religion </Text>
         </TouchableOpacity>
       </View>
     </View>
  </ScrollView>
    </View>
  );
}

export default InstitucionesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'auto',
    width:'100%',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around',
    padding: 10,
  },
  containerCard:{
    width:'80%',
    height:635,
    marginTop:'8%',
    alignItems:'center',
    gap:30,
    padding:10,
  },
  categoryContainer: {
    width: 266,
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
