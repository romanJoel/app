// remises.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardRemises from '../../components/cards/CardRemises';
import { DataCardType, RemisDataType, RemisType } from '../../type/type';

const Remises = () => {
  const [cardsData, setCardsData] = useState<RemisDataType>({ remises: [] });

  useEffect(() => {
    fetch('http://10.0.2.2:8084/comercioprofesional/remis',{method:'GET'})
    .then( response => response.json() )
    .then( data => setCardsData( {remises:data} ) )
    .catch( error => console.log( 'Fetch error:', error) ) // hay que armar un mensaje de error
    }  , [] ) ;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.safeArea}>
          {cardsData.remises.map((remis: RemisType, index: number) => (
            <CardRemises
              key={`remis_${index}`}
              remis={remis} // Pasamos la información completa del remis
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    margin: 0,
    backgroundColor: '#fff',
  },
});

export default Remises;
