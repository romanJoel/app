// cardremises.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RemisType } from '../../type/type';

interface CardRemisesProps {
  remis: RemisType;
}

const CardRemises: React.FC<CardRemisesProps> = ({ remis }) => {
  const openWhatsApp = () => {
    const phoneNumber = remis.whatsapp || '1234567890';
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  const makePhoneCall = () => {
    const phoneNumber = remis.telefono || '1234567890';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openLocation = () => {
    const latitude = remis.latitud || '0';
    const longitude = remis.longitud || '0';
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
  };

  return (
    <View style={styles.CardContainer}>
      <View style={styles.containerCardImage}>
        <Image source={{ uri: remis.imagen }} style={styles.imageCard} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.cardInfo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            {`${remis.nombre} ${remis.apellido}`}
          </Text>
          <View style={{ marginTop: 5, flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
            <Text style={{ color: '#185574', fontSize: 18 }}>Patente:</Text>
            <Text style={{ color: '#2C9CCB', fontSize: 18 }}>{remis.patente}</Text>
          </View>
          <View style={{ marginTop: 5, flexDirection: 'row', width: '80%', justifyContent: 'space-around', marginRight: 40 }}>
            <Text style={{ color: '#185574', fontSize: 19 }}>Vehiculo:</Text>
            <Text style={{ color: '#2C9CCB', fontSize: 19 }}>{remis.vehiculo}</Text>
          </View>
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
  CardContainer: {
    backgroundColor: '#fff',
    height: 200,
    flexDirection: 'row',
    marginTop: 33,
    marginHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  containerInfo: {
    width: '59%',
    height: 272,
  },
  containerCardImage: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageCard: {
    width: 98,
    height: '100%',
    borderColor: '#000',
  },
  cardInfo: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '52%',
    width: '98%',
    gap: 10,
    borderRadius: 10,
  },
  cardContact: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  botonContact: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '000',
  },
});

export default CardRemises;
