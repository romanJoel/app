import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type CardProps = {
  title: string;
  description: string;
  imageSource: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageSource }) => {
  const openWhatsApp = () => {
    // Reemplazar por número de WhatsApp
    Linking.openURL(`whatsapp://send?phone=1234567890`);
  };

  const makePhoneCall = () => {
    // Reemplazar con el número de teléfono 
    Linking.openURL('tel:1234567890');
  };

  const openLocation = () => {
    // Reemplaza las coordenadas por las de la ubicación que deseas mostrar
    Linking.openURL('https://www.google.com/maps?q=latitude,longitude');
  };

  return (
    <View style={styles.CardContainer}>
       <View style={styles.containerCardImage}>
       <Image
        source={{ uri: imageSource }}
        style={styles.imageCard}
      />
       </View>
      <View style={styles.containerInfo}>
      <View style={styles.cardInfo}>
         <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{title}</Text>
         <Text style={{ marginTop: 5 }}>{description}</Text>
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
      height:200,
      flexDirection:'row',
      marginTop:33,
      marginHorizontal:10,
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
      width:'59%',
      height:272,
    },
    containerCardImage:{
      //backgroundColor:'#ddd',
        width: '40%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
    },
    imageCard:{
        width: 98,
        height:'100%',
        borderColor:'#000'
    },
    cardInfo:{
        alignItems:'center',
        backgroundColor:'#fff',
        height:'52%',
        width:'98%',
        borderRadius:10,
    },
    cardContact:{
      height:'20%',
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

export default Card;
