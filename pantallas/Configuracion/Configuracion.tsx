import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Configuracion = ({ route }: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.volver}>
          <FontAwesome name="arrow-left" size={20} color="#fff"/>
          <Text style={styles.backText}>Encabezado Configuracion</Text>
        </TouchableOpacity>
      <View style={styles.contenedorConfiguracion}>
        <Text>Hola</Text>
      </View>
    </View>
  );
};

export default Configuracion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:100,
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  volver: {
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
  contenedorConfiguracion: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F4F8FE',
  },
});
