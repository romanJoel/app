import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const SecundariaJustina: React.FC = () => {
  const secundariaJustinaData = data.educacion.find((item) => item.nombre === 'Secundaria Santa Justina');

  return (
    <ScrollView>
      {secundariaJustinaData ? (
        <CardEducacion
          nombre={secundariaJustinaData.nombre}
          imagen={secundariaJustinaData.imagen}
          horario={secundariaJustinaData.horarios}
          direccion={secundariaJustinaData.direccion}
          whatspp={secundariaJustinaData.whatsapp}
          telefono={secundariaJustinaData.telefono}
          ubicacion={secundariaJustinaData.ubicacion}
        />
      ) : (
        <Text>No hay datos disponibles para Secundaria Santa Justina</Text>
      )}
      {/* Otros componentes o contenido relacionado con Santa Justina */}
    </ScrollView>
  );
};

export default SecundariaJustina;
