// CardFarmacias.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HorarioStatus from '../horarios/HorarioStatus';
import { FarmaciasType } from '../../type/type';

type CardFarmaciasProps = {
  title: string;
  direccion: string;
  imageSource: string;
  horarios: { dias: string; horario: string }[];
  farmacia: FarmaciasType;  // <-- Agrega la propiedad farmacia
  farmaciaData: any;
}; 

const CardFarmacias: React.FC<CardFarmaciasProps> = ({ title, direccion, imageSource, horarios, farmacia, farmaciaData }) => {
  useEffect(() => {
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = farmaciaData?.telefono || '1234567890';
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  const makePhoneCall = () => { 
    const phoneNumber = farmaciaData?.telefono || '1234567890';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openLocation = () => {
    const latitude = farmaciaData?.latitud || '0';
    const longitude = farmaciaData?.longitud || '0';
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: '50%', marginTop: 30, left: 18, color: '#185574', fontWeight: 'bold' }}>Direccion:</Text>
            <Text style={{ width: '50%', marginTop: 30, color: '#34B7F1', fontSize: 18 }}>{farmaciaData?.direccion || direccion}</Text>
          </View>
        </View>
        <View style={styles.cardHorarios}>
          <HorarioStatus />
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
      height:252,
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
      height:'100%',
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
        height:'35%',
        width:'98%',
        borderRadius:10,
    },
    cardHorarios: {
      flexDirection: 'column',
      alignItems:'center',
      width:'100%',
      height:100,
    },
    horarioContainer: {
      flexDirection: 'row',
      flex:1,
      width:'100%',
    },
    horarioDias: {
      width:'51%',
    },
    horarioTexto:{
      flex: 1,
      marginLeft:10,
      width:'50%',
      margin:5,
      flexDirection:'column',
    },
    cardContact:{
        height:'25%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10
    },
    botonContact:{
      width:'20%',
      height:40,
      alignItems:'center',
      justifyContent:'flex-end',
      borderRadius:100,
      borderColor:'000',
      //borderWidth:1,
    }

})

export default CardFarmacias;
