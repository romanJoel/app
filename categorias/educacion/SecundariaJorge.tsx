//SecundariaJorge.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const SecundariaJorge: React.FC = () => {
  const secundariaJorgeData = data.educacion.find((item) => item.nombre === 'Secundaria Jorge Newbery');

  return (
    <ScrollView>
      {secundariaJorgeData ? (
        <CardEducacion
          nombre={secundariaJorgeData.nombre}
          imagen={secundariaJorgeData.imagen}
          horario={secundariaJorgeData.horarios}
          direccion={secundariaJorgeData.direccion}
          whatspp={secundariaJorgeData.whatsapp}
          telefono={secundariaJorgeData.telefono}
          ubicacion={secundariaJorgeData.ubicacion}
        />
      ) : (
        <Text>No hay datos disponibles para secundaria Jorge Newbery</Text>
      )}
      {/* Otros componentes o contenido relacionado con Jorge Newbery */}
    </ScrollView>
  );
};

export default SecundariaJorge;