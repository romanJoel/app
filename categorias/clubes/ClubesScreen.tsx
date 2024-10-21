import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ClubesScreen = (props: any)=> {
  console.log(props)
  return ( 
     <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Sportivo')}>
          <Text style={styles.text} >Sportivo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Union')}>
          <Text style={styles.text} > Union </Text>
         </TouchableOpacity>
      </View>
      </View>
  );
}

export default ClubesScreen;

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
    width:'80%',
    height:300,
    marginTop:'10%',
    alignItems:'center',
    gap:40,
    paddingTop:50,
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
