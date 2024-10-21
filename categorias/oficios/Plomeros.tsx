//Plomeros.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import CardOficios from './CardOficios';
import data from './DataOficios.json'; 
import { OficiosType } from '../../type/type';


const Plomeros = () => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data.plomeros) {
      setCardsData(data.plomeros);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto',  paddingBottom: 50 }}>
          {cardsData.map((plomeros: OficiosType, index: number) => (
            <CardOficios
              key={`Plomero_${index}`}
              oficios={plomeros}
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
    paddingBottom:10,
    //margin: 10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  containerCard:{
    backgroundColor:'#F4F8FE',
    height:'auto',
    width:'95%',
    marginTop:'2%',
    gap:40,

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

export default Plomeros;
