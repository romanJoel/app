// Albañiles.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CardOficios from './CardOficios';
import data from './DataOficios.json';
import { OficiosType } from '../../type/type';

const Albañiles = () => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data.albañiles) {
      setCardsData(data.albañiles);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto', paddingBottom: 50 }}>
          {cardsData.map((albañil: OficiosType, index: number) => (
            <CardOficios
              key={`Albañil_${index}`}
              oficios={albañil}
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
    backgroundColor:'#fff',
    height:'auto',
    width:'95%',
    marginTop:'2%',
   gap:40,
  
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});

export default Albañiles;
