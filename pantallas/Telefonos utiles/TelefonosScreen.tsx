import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const categoryData = [
  { title: 'Policia'},
  { title: 'Samco'},
  { title: 'Bomberos'},
];


const TelefonosScreen = ({ navigation }: any) => {
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

  const renderCategoryItem = (title: string) => (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryItem}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={styles.text}>{title}:</Text>
            <Text style={styles.numero}>0303456</Text> 
            <FontAwesome style={styles.iconophone} name="phone"/>
        </View>
      </View>
    </View>
  );
  
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.volver}>
          {/*<FontAwesome name="arrow-left" size={20} color="#fff"/>*/}
          <Text style={styles.backText}>Telefonos Utiles</Text>
        </TouchableOpacity>
        <View style={styles.containerRow}>
          <View style={{ marginTop: 10 }}>
            {categoryData.map((category, index) => (
              <View style={styles.row} key={index}>
                {renderCategoryItem(category.title)}
              </View>
            ))}
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  volver: {
    top:-10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#54B5DE',
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 15,
    textAlign:'center',
    fontWeight: 'bold',
    marginLeft: 5,
    flex: 1, // Esto expandirá el texto para ocupar el espacio restante
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop:20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  containerRow: {
    backgroundColor: '#F4F8Fa',
    width: '95%',
    padding: 40,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 32,
    marginBottom: 20,
  },
  categoryContainer: {
    width: 350,
    height: 125,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  categoryItem: {
    flex: 1,
    padding:40,
    justifyContent: 'space-between',
  },

  numero:{
    fontSize:18,
    fontWeight:'bold',
  },

  iconophone:{
    fontSize: 30,
    padding: 9,
  },

  text: {
    left: -10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomWidth:2,
    borderBottomColor:'#000'
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
});

export default TelefonosScreen;