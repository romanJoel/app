import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../../components/cards/data.json'
import CardSanatorios from '../../components/cards/CardSanatorios';

type SanatoriosType = {
    nombre: string;
    direccion: string;
    imagen: string;
    horarios: { dias: string; horario: string }[];
  };

type CardsDataType = {
  sanatorios: SanatoriosType[];
};

const CardViewSanatorios = () => {
  const [cardsData, setCardsData] = useState<CardsDataType>({
    sanatorios: [],
  });

  useEffect(() => {
    setCardsData(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor:'#fff', flex:1}} >
      {cardsData.sanatorios.map((sanatorios: SanatoriosType, index: number) => (
        <CardSanatorios
              key={`sanatorios_${index}`}
              title={sanatorios.nombre}
              description={`Dirección: ${sanatorios.direccion}`}
              imageSource={sanatorios.imagen}
              horarios={sanatorios.horarios}       
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

export default CardViewSanatorios;
