import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Sombreado from "../../components/sombreado/Sombreado";




    
  
  const Colectivo = () => {
    const [tarifasModalVisible, setTarifasModalVisible] = useState(false);
  const [paradasModalVisible, setParadasModalVisible] = useState(false);

  const openTarifasModal = () => {
    setTarifasModalVisible(true);
  };

  const openParadasModal = () => {
    setParadasModalVisible(true);
  };

  const closeTarifasModal = () => {
    setTarifasModalVisible(false);
  };

  const closeParadasModal = () => {
    setParadasModalVisible(false);
  };

    return (
     <ScrollView style={{backgroundColor:'#fff'}} >
         <View style={styles.container} >
          {/* contenedor de imagen y precio */}
          <View style={styles.imgPrecio} >
            {/* Colocar imagen */}
                <View style={styles.viewFigure} >

                </View>
                <View style={styles.precioBoleto} >
                    <Sombreado style={styles.boleto} >Precio boleto:</Sombreado>
                    <Sombreado style={styles.precio} >$1000</Sombreado>
                </View>
                <TouchableOpacity onPress={openTarifasModal} style={styles.touchTarifa}>
                  <Image
                    source={require('../../assets/images/expand-1.png')} // Asegúrate de proporcionar la ruta correcta a tu icono
                    style={{ width:35, height:35,  tintColor: 'blue', }}
                  />
                </TouchableOpacity>
          </View>
          {/* Contenedor de Horarios */}
          <View style={styles.horariosColectivo}>
            <View style={styles.horariosTitulo}>
              <Text style={styles.TituloText}>Lunes a Viernes (vacacional)</Text>
            </View>
            <View style={styles.horariosHorarios}>
              <Text style={styles.haciaTitulo} >Alvarez hacia Rosario</Text>
              <Text style={styles.haciaHorarios} >Cargando horarios...</Text>
            </View>
            <View style={styles.horariosHorarios}>
              <Text style={styles.haciaTitulo} >Alvarez hacia Rosario</Text>
              <Text style={styles.haciaHorarios} >Cargando horarios...</Text>
            </View>
            {/* Horarios finde */}
            <View>
              <Text style={styles.TituloTextFeriados} >Sab, Dom y feriados (vacacional)</Text>
            </View>
            <View style={styles.horariosHorarios}>
              <Text style={styles.haciaTitulo} >Alvarez hacia Rosario</Text>
              <Text style={styles.haciaHorarios} >Cargando horarios...</Text>
            </View>
            <View style={styles.horariosHorarios}>
              <Text style={styles.haciaTitulo} >Alvarez hacia Rosario</Text>
              <Text style={styles.haciaHorarios} >Cargando horarios...</Text>
            </View>
          </View>
          {/* Contenedor de paradas */}
           <TouchableOpacity onPress={openParadasModal} style={styles.touchParadas}>
              <Sombreado style={{ color: '#185574', fontWeight: '500', letterSpacing: 1 }}>Ver paradas</Sombreado>
           </TouchableOpacity>
           {/* Modal tarifas */}
          <Modal
              animationType="slide"
              transparent={true}
              visible={tarifasModalVisible}
              onRequestClose={closeTarifasModal}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                       <Text style={styles.tarifasModalTitulo}>Tarifas</Text>
                    <View style={{width:'100%', height:150}}>
                       <Image
                            source={require('../../assets/images/tarifa.jpg')} // Asegúrate de proporcionar la ruta correcta a tu icono
                            style={{ width:'100%', height:'100%', resizeMode:'contain'}}
                         />
                        <TouchableOpacity onPress={closeTarifasModal} style={{ marginTop: 20, alignItems:'center' }}>
                           <Text style={styles.cerrarModal}>Cerrar</Text>
                         </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </Modal>
            
          {/* Modal paradas */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={paradasModalVisible}
          onRequestClose={closeParadasModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContentParadas}>
              <Sombreado>Paradas</Sombreado>
              <View style={styles.contenidoModalParadas}>
              
                {/* Contenido del modal de Paradas */}
              
              </View>
              <TouchableOpacity onPress={closeParadasModal} style={{ marginTop: 15, alignItems: 'center' }}>
                  <Text style={styles.cerrarModalParada}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
     </ScrollView>
    );
  };
  
  export default Colectivo;

  const styles = StyleSheet.create({
    container:{
      height:970,
      alignItems:'center',
      backgroundColor:'#fff',
    },
    imgPrecio:{
      height: 150,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      gap:30
    },
    viewFigure:{
      height: '60%',
      width:'22%',
      borderWidth:1,
      borderColor: '#ccc',
      borderRadius:100,
      marginLeft:30
    },
    precioBoleto:{
      width:'30%',
      height:'100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:20
    },
    boleto:{
      color:'#185574',
      fontWeight:'500',
    },
    precio:{
      color:'#185574',
      fontSize:20,
      fontWeight:'600',
      left:-30,
    },
    touchTarifa:{
      left:-50,
      top:20,
      width:20,
      height:20
    },
    horariosColectivo:{
      width:'90%',
      height:720,
      gap:20,
      borderRadius:20,
      backgroundColor:'#EBF1FA',
      borderColor:'#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 0 },
      shadowOpacity: 0.9,
      shadowRadius: 6,
      elevation: 2,
    },
    horariosTitulo:{
      paddingTop:15,
      alignItems:'center'
    },
    TituloText:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'400',
      width:'100%',
      color:'#194761',
      borderBottomWidth:1,
      borderBottomColor:'#194761'
    },
    TituloTextFeriados:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'400',
      width:'100%',
      color:'#194761',
      borderBottomWidth:1,
      borderBottomColor:'#194761',
      borderTopColor:'#194761',
      borderTopWidth:1,
    },
    horariosHorarios:{
      height:130,
      alignItems:'center'
    },
    haciaTitulo:{
      fontSize:18,
      fontWeight:'400',
      width:'55%',
      color:'#194761',
      borderBottomWidth:1,
      borderBottomColor:'#194761'

    },
    haciaHorarios:{
      color:'#185574',
      fontSize:15,
      marginVertical:15
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
      height:'40%',
      alignItems: 'center',
      elevation: 5,
    },
    tarifasModalTitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#185574', 
    borderBottomColor:'#185574',
    borderBottomWidth:1
    },
    cerrarModal:{
      width:120,
      textAlign:'center',
      color: '#185574',
      fontWeight: 'bold',
      fontSize:22,
      borderColor:'#194761',
      borderWidth:1,
      borderRadius:20, 
      padding:10,
    },
    touchParadas:{
      padding:18,
      width:280,
      alignItems:'center',
      borderWidth:1,
      borderColor:'#185574',
      borderRadius:20,
      marginVertical:20,
    },
    modalContentParadas:{
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width:"90%",
      height:'70%',
      alignItems: 'center',
      elevation: 5,
    },
    contenidoModalParadas:{
      backgroundColor:'#ddd',
      width:'100%',
      height:'85%'
    },
    cerrarModalParada:{
      width:120,
      textAlign:'center',
      color: '#185574',
      fontWeight: 'bold',
      fontSize:22,
      borderColor:'#194761',
      borderWidth:1,
      borderRadius:20, 
      padding:4,
    },
  })