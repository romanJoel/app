import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ComerciosType } from '../../../type/type';
import data from '../DataComercios.json'
import CardSanatorios from '../../../components/cards/CardSanatorios';



type CardsDataType = {
  kioskos: ComerciosType[];
};

const Kioskos = () => {
  const [cardsData, setCardsData] = useState<CardsDataType>({
  kioskos: [],
  });

  useEffect(() => {
    setCardsData(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor:'#fff', flex:1}} >
      {cardsData.kioskos.map((kioskos: ComerciosType, index: number) => (
        <CardSanatorios
              key={`sanatorios_${index}`}
              title={kioskos.nombre}
              description={`Dirección: ${kioskos.direccion}`}
              imageSource={kioskos.imagen}
              horarios={kioskos.horarios}       
              />
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default Kioskos;
