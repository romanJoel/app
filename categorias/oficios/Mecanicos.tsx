import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import CardOficios from './CardOficios';
import data from './DataOficios.json'; 
import { OficiosType } from '../../type/type';


const Mecanicos = () => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data.mecanicos) {
      setCardsData(data.mecanicos);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto', paddingBottom: 50, }}>
          {cardsData.map((mecanicos: OficiosType, index: number) => (
            <CardOficios
              key={`Mecanicos_${index}`}
              oficios={mecanicos}
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
    //margin: 10,
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

export default Mecanicos;
