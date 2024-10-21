import React from 'react';
import { ScrollView, Text } from 'react-native';
import CardEducacion from '../../components/cards/CardEducacion';
import data from '../../components/cards/data.json';

const PrimariaFiscal: React.FC = () => {
  const primariaFiscalData = data.educacion.find((item) => item.nombre === 'Primaria Fiscal');

  return (
    <ScrollView>
      {primariaFiscalData ? (
        <CardEducacion
          nombre={primariaFiscalData.nombre}
          imagen={primariaFiscalData.imagen}
          horario={primariaFiscalData.horarios}
          direccion={primariaFiscalData.direccion}
          whatspp={primariaFiscalData.whatsapp}
          telefono={primariaFiscalData.telefono}
          ubicacion={primariaFiscalData.ubicacion}
        />
      ) : (
        <Text>No hay datos disponibles para Primaria Fiscal</Text>
      )}
      {/* Otros componentes o contenido relacionado con Primaria Fiscal */}
    </ScrollView>
  );
};

export default PrimariaFiscal;