// PrimariaJustina.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const PrimariaJustina: React.FC = () => {
  const primariaJustinaData = data.educacion.find((item) => item.nombre === 'Primaria Santa Justina');


return (
  <ScrollView>
    {primariaJustinaData ? (
      <CardEducacion
        nombre={primariaJustinaData.nombre}
        imagen={primariaJustinaData.imagen}
        horario={primariaJustinaData.horarios}
        direccion={primariaJustinaData.direccion}
        whatspp={primariaJustinaData.whatsapp}
        telefono={primariaJustinaData.telefono}
        ubicacion={primariaJustinaData.ubicacion}
      />
    ) : (
      <Text>No hay datos disponibles para Primaria Santa Justina</Text>
    )}
    {/* Otros componentes o contenido relacionado con Santa Justina */}
  </ScrollView>
);
};

export default PrimariaJustina;