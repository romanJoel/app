// CardOficios.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { OficiosType } from '../../type/type';

type CardOficiosProps = {
  oficios?: OficiosType;
};

const CardOficios: React.FC<CardOficiosProps> = ({ oficios = {} }) => {
  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${oficios.telefono}`);
  };

  const makePhoneCall = () => {
    Linking.openURL(`tel:${oficios.telefono}`);
  };

  const openLocation = () => {
    Linking.openURL('https://www.google.com/maps?q=latitude,longitude');
  };

  return (
    <View style={styles.CardContainer}>
      <View style={styles.containerInfo}>
        <View style={styles.cardInfo}>
          <Text style={styles.textTitle}>{`${oficios.nombre} ${oficios.apellido}`}</Text>
          <Text style={styles.textDescripcion}>{oficios.descripcion}</Text>
        </View>
        <View style={styles.cardContact}>
          <TouchableOpacity onPress={openWhatsApp} style={styles.botonContact}>
            <FontAwesome name="whatsapp" size={30} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity onPress={makePhoneCall} style={styles.botonContact}>
            <FontAwesome name="phone" size={30} color="#34B7F1" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openLocation} style={styles.botonContact}>
            <FontAwesome name="map-marker" size={30} color="#EA4335" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    CardContainer:{
      backgroundColor:'#fff',
      height:180,
      flexDirection:'row',
      marginTop:12,
      marginHorizontal:10,
      padding:4,
      borderColor:'#ddd',
      borderWidth:1,
      borderRadius:20,
      shadowColor: 'blue',
      shadowOffset: { width: 2, height: 0 },
      shadowOpacity: 0.6,
      shadowRadius: 6,
      elevation: 4,
    },
    containerInfo:{
      width:'100%',
      height:272,
    },
    cardInfo:{
        alignItems:'center',
        backgroundColor:'#fff',
        height:'45%',
        width:'100%',
        gap:25,
        borderRadius:10,
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color:'#194761' 
    },
    textDescripcion:{
        marginTop: 5,
        color:'#2C9CCB',
        fontSize:13,
    },
    cardContact:{
      height:'15%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10
    },
    botonContact:{
      width:'20%',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      borderColor:'000',
      //borderWidth:1,
      
    }

})


export default CardOficios;
