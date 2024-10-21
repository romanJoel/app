// OficiosComponent.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import data from '../../categorias/subCategorias/oficios/DataOficios.json';
import { OficiosType } from '../../type/type';
import CardOficios from '../../categorias/subCategorias/oficios/CardOficios';

/*
falta modificar informacion del DataOficios para mostrar la informacion y la CardOficios.
la idea es crear un componente "OficiosComponent" para mostrar la informacion de cada oficio.
*/

type OficiosComponentProps = {
  title: string;
  dataKey: keyof typeof data; // Utiliza keyof para limitar dataKey a las claves de DataOficios.json
};

const OficiosComponent: React.FC<OficiosComponentProps> = ({ title, dataKey }) => {
  const [cardsData, setCardsData] = useState<OficiosType[]>([]);

  useEffect(() => {
    if (data && data[dataKey] && data[dataKey].oficios) {
      setCardsData(data[dataKey].oficios);
    }
  }, [dataKey]);

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ScrollView style={{ margin: 'auto', padding: 10 }}>
          {cardsData.map((oficio: OficiosType, index: number) => (
            <CardOficios
              key={`${dataKey}_${index}`}
              title={`${oficio.nombre} ${oficio.apellido}`}
              description={oficio.descripcion}
              phoneNumber={oficio.telefono}
              latitude={oficio.latitud}
              longitude={oficio.longitud}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    backgroundColor: '#F4F8FE',
    height: 'auto',
    width: '95%',
    marginTop: '2%',
    gap: 40,
    borderRadius: 10,
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

export default OficiosComponent;
