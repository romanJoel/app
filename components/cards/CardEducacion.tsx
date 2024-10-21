import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Modal, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type CardEducacionProps = {
  nombre: string;
  imagen: string;
  horario: { dias: string; horario: string }[];
  direccion: string;
  whatspp: string;
  telefono: string;
  ubicacion?: string;
};

const CardEducacion: React.FC<CardEducacionProps> = ({
  nombre,
  imagen,
  horario,
  direccion,
  whatspp,
  telefono,
  ubicacion,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [estadoApertura, setEstadoApertura] = useState('');

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=1234567890`);
  };

  const makePhoneCall = () => {
    Linking.openURL('tel:1234567890');
  };

  const openLocation = () => {
    Linking.openURL('https://www.google.com/maps?q=latitude,longitude');
  };

  const openModal = () => {
    determinarEstadoApertura();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const determinarEstadoApertura = () => {
    const horaActual = new Date().getHours();

    // Supongamos que el horario de cierre es a las 18:00
    const horaCierre = 18;

    if (horaActual < horaCierre) {
      setEstadoApertura('Abierto');
    } else if (horaActual < horaCierre + 1) {
      setEstadoApertura('Pronto a cerrar');
    } else {
      setEstadoApertura('Cerrado');
    }
  };

  return (
   <View style={{width:'100%', paddingBottom:10, backgroundColor:'#fff'}}>
     <View style={styles.CardContainer}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#185574' }}>{nombre}</Text>
      <View style={styles.containerCardImage}>
        <Image source={{ uri: imagen }} style={styles.imageCard} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.cardInfo}>
          <TouchableOpacity onPress={openModal} style={{ marginVertical: 20 }}>
            <Text style={{ color: estadoApertura === 'Abierto' ? 'green' : estadoApertura === 'Pronto a cerrar' ? 'yellow' : 'red', fontWeight: 'bold' }}>
              {estadoApertura}
            </Text>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Ver horarios completos</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 15, color: '#185574' }}> Direccion: {direccion}</Text>
          <Text style={{ marginTop: 15, color: '#185574' }}> Telefono: {telefono}</Text>
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
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#185574' }}>Horarios</Text>

            {/* Organizar por días de la semana */}
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((dia, index) => {
              const horarioDia = horario.find((horario) => horario.dias.includes(dia));

              return (
                <View style={styles.containerModalHorarios} key={index}>
                  <View style={styles.modalDias}>
                    <Text style={styles.modalTextDias}>{dia}:</Text>
                  </View>
                  <View style={styles.modalHorarios}>
                    <Text style={styles.modalTextHorarios}>{horarioDia ? horarioDia.horario : 'Cerrado'}</Text>
                  </View>
                </View>
              );
            })}

            <TouchableOpacity onPress={closeModal} style={{ marginTop: 20 }}>
              <Text style={{ color: '#185574', fontWeight: 'bold' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
   </View>
  );
};


const styles = StyleSheet.create({
    CardContainer:{
      backgroundColor:'#fff',
      height:630,
      flexDirection:'column',
      alignItems:'center',
      gap:23,
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
        width: '55%',
        height:'35%',
        backgroundColor:'#ddd',
        marginTop:4,
        marginLeft:6,
        borderRadius:5
    },
    imageCard:{
        width: 98,
        height:'100%',
        borderColor:'#000'
    },
    cardInfo:{
        alignItems:'center',
        backgroundColor:'#fff',
        height:'82%',
        width:'100%',
        borderRadius:10,
    },
    cardContact:{
      height:'20%',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        gap:100,
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width:"90%",
        height:'60%',
        alignItems: 'center',
        elevation: 5,
      },
      containerModalHorarios:{
        flexDirection:'row',
        marginBottom: 8
      },
      modalDias:{
        width:'30%',
        fontWeight: 'bold'
      },
      modalHorarios:{
        width:'70%',
        flexDirection:'column',
      },
      modalTextDias:{
        color: '#185574',
        fontSize:15,
        margin:10,
        borderBottomWidth:1,
        borderColor:'#ddd'
      },
      modalTextHorarios:{
        color: '#185574',
        fontSize:15,
        margin:10,
        borderBottomWidth:1,
        borderColor:'#ddd'
      }

})

export default CardEducacion;
