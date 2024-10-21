// Este sera el componente para mostrar las Cards sencillas. Ej: comuna, bomberos, etc..
// toda tarjeta individual.

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BotonContacto from '../botones/BotonContacto';

type CardProps = {
  data: {
    titulo: string;
    imagen: string; 
    direccion: string;
    telefono: string;
    ubicacion?: string;
    horarios: string; 
  };
};

const SimpleCard: React.FC<CardProps> = ({ data }) => {
  const openLocation = () => {
    Linking.openURL(`https://www.google.com/maps?q=${data.ubicacion}`);
  };

  return (
    <View style={styles.container}>
   
      <View style={styles.titulo}>
        <Text style={styles.TituloText}>{data.titulo}</Text>
      </View>
   
      <View style={styles.containerImage}>
        <Image style={styles.imagen} source={{ uri: data.imagen }} resizeMode='cover' />
      </View>
   
    {/* contenedores de horarios, direccion y componente de botones (llamada y whatsApp) */}
      <View style={styles.containerInfo}>
        <View style={styles.horariosDireccion}>
          <Text style={styles.text}>Horarios:</Text>
          <Text style={{marginRight:25, fontSize:15, color: '#2C9CCB', marginTop:5}}>{data.horarios}</Text>
        </View>
    
        <View style={styles.horariosDireccion}>
          <Text style={styles.text}>Direccion:</Text>
          <Text style={{fontSize:16, color: '#2C9CCB', marginTop:2}} >{data.direccion}</Text>
          <TouchableOpacity onPress={openLocation} style={styles.botonUbi}>
            <FontAwesome name="map-marker" size={35} color="#EA4335" />
          </TouchableOpacity>
        </View>
        <BotonContacto telefono={data.telefono} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        width:360,
        backgroundColor:'#F4F8FE',
       height:600,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        marginTop:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ddd',
        shadowColor: 'blue',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 4,
      },
      titulo:{
        marginTop:10
      },
      TituloText:{
        color:'#185574',
        fontSize:30,
        fontWeight:'bold',
     },
     containerImage:{
        width:200,
        height:200,
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:120,
        alignItems:'center',
        justifyContent:'center'
     },
     imagen:{
        borderRadius:100,
        width:'100%',
        height:'100%'
     },
     containerInfo:{
        height:150,
        width:'95%',
        gap:40
     },
     text:{
        fontSize:20,
        color:'#185574'
     },
     botonUbi:{
        width:'25%',
        height:35,
        marginTop:4,
        alignItems:'center',
        justifyContent:'center',
      },
     
     horariosDireccion:{
      height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     },
     

})

export default SimpleCard;
