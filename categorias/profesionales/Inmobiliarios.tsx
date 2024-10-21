import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import data from './DataProfesionales.json'
import { ProfesionalesType } from '../../type/type';
import CardOficios from '../oficios/CardOficios';


const Inmobiliarios = () => {
  const [cardsData, setCardsData] = useState<ProfesionalesType[]>([]);

  useEffect(() => {
    if (data && data.inmobiliarios) {
      setCardsData(data.inmobiliarios);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard} >
      <ScrollView>
        {cardsData.map((inmobiliarios: ProfesionalesType, index: number) => (
          <CardOficios
          key={`Abogado_${index}`}
              oficios={inmobiliarios}
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
    width:'100%',
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

export default Inmobiliarios;
