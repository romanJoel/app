//Gomerias.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import CardOficios from './CardOficios';
import data from './DataOficios.json'; 
import { OficiosType } from '../../type/type';


const Gomerias = () => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data.gomerias) {
      setCardsData(data.gomerias);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto',  paddingBottom: 50 }}>
          {cardsData.map((gomerias: OficiosType, index: number) => (
            <CardOficios
              key={`Gomerias_${index}`}
              oficios={gomerias}
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

export default Gomerias;
