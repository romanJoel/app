// JardinBabataky.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const JardinBabataky: React.FC = () => {
  const jardinBabatakyData = data.educacion.find((item) => item.nombre === 'Jardín Babataky');

  return (
    <ScrollView>
      {jardinBabatakyData ? (
        <CardEducacion
          nombre={jardinBabatakyData.nombre}
          imagen={jardinBabatakyData.imagen}
          horario={jardinBabatakyData.horarios}
          direccion={jardinBabatakyData.direccion}
          whatspp={jardinBabatakyData.whatsapp}
          telefono={jardinBabatakyData.telefono}
          ubicacion={jardinBabatakyData.ubicacion}
        />
      ) : (
        <Text>No hay datos disponibles para Jardín Babataky</Text>
      )}
      {/* Otros componentes o contenido relacionado con Jardín Babataky */}
    </ScrollView>
  );
};

export default JardinBabataky;
