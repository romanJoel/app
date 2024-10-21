// JardinBabataky.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const PrimerosPasos: React.FC = () => {
  const primerosPasosData = data.educacion.find((item) => item.nombre === 'Jardín Maternal Primeros Pasos');

  return (
    <ScrollView>
      {primerosPasosData ? (
        <CardEducacion
          nombre={primerosPasosData.nombre}
          imagen={primerosPasosData.imagen}
          horario={primerosPasosData.horarios}
          direccion={primerosPasosData.direccion}
          whatspp={primerosPasosData.whatsapp}
          telefono={primerosPasosData.telefono}
          ubicacion={primerosPasosData.ubicacion}
        />
      ) : (
        <Text>No hay datos disponibles para Jardín Babataky</Text>
      )}
      {/* Otros componentes o contenido relacionado con Jardín Babataky */}
    </ScrollView>
  );
};

export default PrimerosPasos;
