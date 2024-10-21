import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Modal, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HorarioStatus from '../horarios/HorarioStatus';

type CardSanatoriosProps = {
  title: string;
  direccion: string;
  imageSource: string;
  horarios: { dias: string; horario: string }[];
};

const CardSanatorios: React.FC<CardSanatoriosProps> = ({ title, direccion, imageSource, horarios }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.CardContainer}>
      <View style={styles.containerCardImage}>
        <Image source={{ uri: imageSource }} style={styles.imageCard} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.cardInfo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10,color:'#185574'}}>{title}</Text>
          <View style={{flexDirection:'row'}} >
          <Text style={{ marginTop: 15, color:'#185574',left:-65,fontSize:16 }}>Direccion:</Text>
          <Text>{direccion}</Text>
          </View>
      <TouchableOpacity onPress={openModal} style={styles.touchHorario}>
          <HorarioStatus/>  
        <Image
          source={require('./expand_more_FILL0_wght400_GRAD0_opsz24.png')} // Asegúrate de proporcionar la ruta correcta a tu icono
          style={{ tintColor: 'blue' }}
        />
    </TouchableOpacity>
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
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={closeModal}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#185574' }}>Horarios</Text>
      
      {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((dia) => {
    const horarioDia = horarios.find((horario) => horario.dias.includes(dia));

    return (
        <View style={styles.containerModalHorarios} key={dia}>
            <View style={styles.modalDias}>
                <Text style={styles.modalTextDias}>{dia}:</Text>
            </View>
            <View style={styles.modalHorarios}>
                <Text style={styles.modalTextHorarios}>{horarioDia ? horarioDia.horario : "Cerrado"}</Text>
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
  );
};

const styles = StyleSheet.create({
    CardContainer:{
      backgroundColor:'#fff',
      height:200,
      flexDirection:'row',
      marginTop:20,
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
        width: '35%',
        height:'95%',
        backgroundColor:'#ddd',
        marginTop:4,
        marginLeft:6,
        borderRadius:15
    },
    imageCard:{
        width: 98,
        height:'100%',
        
    },
    cardInfo:{
        alignItems:'center',
        backgroundColor:'#fff',
        height:'52%',
        width:'100%',
        borderRadius:10,
    },

    touchHorario:{
      marginVertical: 5,
      flexDirection:'row',
      alignItems:'center',
      marginLeft:20 
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

export default CardSanatorios;
