import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import CardComercios from '../CardComercios';
import data from '../DataComercios.json';


type ComerciosDataType = {
  nombre: string;
  apellido: string;
  imagen: string;
  descripcion: string;
  whatsapp: string;
  telefono: string;
  ubicacion?: string;
};



const Almacenes = () => {
  const [cardsData, setCardsData] = useState<ComerciosDataType[]>([]);

  useEffect(() => {
    if (data && data.almacenes) {
      setCardsData(data.almacenes);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard} >
      <ScrollView style={{padding:10,}}>
        {cardsData.map((almacenes: ComerciosDataType, index: number) => (
          <CardComercios
            key={`almacenes_${index}`} comercios={{
              imagen: '',
              nombre: '',
              apellido: '',
              descripcion: '',
              whataspp: '',
              telefono: '',
              ubicacion: undefined
            }}            
           
          />
        ))}
      </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    backgroundColor: '#fff',
    width:'100%',
    alignItems:'center'
  },
  containerCard:{
    backgroundColor:'#F4F8FE',
    flex:1,
    width:'100%',
    marginTop:'5%',
    alignItems:'center',
    gap:40,
   // paddingTop:10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});

export default Almacenes;
