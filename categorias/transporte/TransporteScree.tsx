
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const TransporteScreen = (props: any)=> {
  console.log(props)
  return ( 
    <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
       <View style={styles.container}>
        <View style={styles.containerCard}>
        <TouchableOpacity style={styles.categoryContainer} 
        onPress={() => props.navigation.navigate('Remises')}>
          <Text style={styles.text} >Remises</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer} 
         onPress={() => props.navigation.navigate('Interbus')}>
          <Text style={styles.text} > Colectivo </Text>
         </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

export default TransporteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:600,
    width:'100%',
    top:-120,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around'
  },
  containerCard:{
    width:'80%',
    height:300,
    alignItems:'center',
    gap:40,
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
