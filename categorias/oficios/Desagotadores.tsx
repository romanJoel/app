// Desagotadores.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CardOficios from './CardOficios';
import data from './DataOficios.json';
import { OficiosType } from '../../type/type';

const Desagotadores = () => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data.desagotadores) {
      setCardsData(data.desagotadores);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto', paddingBottom: 50 }}>
          {cardsData.map((desagotadores: OficiosType, index: number) => (
            <CardOficios
              key={`Desagotador_${index}`}
              oficios={desagotadores}
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
    backgroundColor: '#fff',
    alignItems:'center'
  },
  containerCard:{
    backgroundColor:'#fff',
    flex:1,
    width:'90%',
    marginTop:'5%',
    alignItems:'center',
    gap:40,
   // paddingTop:10,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});

export default Desagotadores;
