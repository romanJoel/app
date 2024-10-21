import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, Pressable, Image } from 'react-native';
import CardFarmacias from '../../components/cards/CardFarmacias';
import { FarmaciasDataType, FarmaciasType } from '../../type/type';
import { FontAwesome } from '@expo/vector-icons';
import  {turnosMarzo}  from './turnos'; // Asegúrate de la ruta correcta

interface TurnoItem {
  nombre: string;
  dia: number;
  farmacia: string;
}

const Farmacias = () => {
  const [cardsData, setCardsData] = useState<FarmaciasDataType>({ farmacias: [] });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DEL_MICROSERVICIO');
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getFarmaciaDeTurnoHoy = () => {
    const today = new Date().getDate();
    const farmaciaHoy = turnosMarzo.find((item) => item.dia === today);
    return farmaciaHoy ? farmaciaHoy.farmacia : "N/A";
  };

  const getBackgroundColorForItem = (index: number, dia: number) => {
    const today = new Date().getDate();
  
    // Lógica para determinar el color de fondo según el índice y el día actual
    const isToday = dia === today;
    const isEvenRow = index % 2 === 0;
  
    if (isToday) {
      return '#E6FFE6'; // Verde claro para el día actual
    } else if (isEvenRow) {
      return '#F0F0F0'; // Gris claro para filas pares
    } else {
      return '#E0E0E0'; // Gris un poco más oscuro para filas impares
    }
  };



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerFarmacias}>
        <View style={styles.headerImg}>
        <Image style={styles.imagen} source={require('./farmaciaDeTurno-img.jpg')} resizeMode='cover' />
        </View>
        <View style={styles.headerInfo}>
          <View style={{flexDirection:'row', gap:10}} >
          <Text style={styles.textHeader}>Hoy de turno: </Text>
          <Text style={styles.textFarmaciaDeTurno}>{getFarmaciaDeTurnoHoy()}</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.touchableVerTodo} >
            <Text style={styles.text}>Ver todo</Text>
          </TouchableOpacity>
           {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.pressableClose}>
               <FontAwesome name="times-circle" size={35} color="#000"/>
            </Pressable>
            <ScrollView>
              {turnosMarzo.map((item, index) => (
                  <View
                  key={index}
                  style={[
                    styles.modalItem,
                    { backgroundColor: getBackgroundColorForItem(index, item.dia) },
                  ]}
                >
                  <Text style={styles.modalText}>
                    {`${item.nombre} ${item.dia} - Farmacia: ${item.farmacia}`}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
        </View>
      </View>

      <ScrollView>
  <View style={styles.safeArea}>
    {cardsData.farmacias && cardsData.farmacias.map((farmacia: FarmaciasType, index: number) => (
      <CardFarmacias
        key={`farmacias_${index}`}
        title={farmacia.nombre}
        direccion={farmacia.direccion}
        imageSource={farmacia.imagen}
        horarios={farmacia.horarios}
        farmaciaData={farmacia}
        farmacia={{
          farmacias: undefined,
          direccion: '',
          imagen: '',
          horarios: [],
          nombre: '',
          latitud: 0,
          longitud: 0,
        }}
      />
    ))}
  </View>
</ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  pressableClose:{
    right:-150,
    top:-10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeModalText: {
    color: 'blue',
    fontSize: 16,
  },
  categoryContainer: {
    width: 350,
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
  touchableVerTodo:{
    padding:10,
    borderWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#2C9CCB',
    borderRadius:20
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'
  },
  headerFarmacias:{
    height:150,
    marginVertical:6
  },
  headerImg:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  imagen:{
    width:90,
    height:80
  },
  headerInfo:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    gap:30
  },
  textHeader:{
    color:'#185574',
    fontSize:19,
    borderBottomWidth:1,
    borderBottomColor:'#185574',
  },
  textFarmaciaDeTurno: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#194761',
  },
  touchableHeader:{
    borderWidth:1,
    borderColor:'blue',
    borderRadius:10,
    padding:10
  },
  safeArea: {
    flex: 1,
    margin: 0,
    backgroundColor: '#fff',
  },
});

export default Farmacias;
