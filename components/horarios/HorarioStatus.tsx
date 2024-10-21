import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

interface Horario {
  abierto: number;
  cierre: number;
  apertura: number;
}


const HorarioStatus: React.FC = () => {
    const [horarios, setHorarios] = useState<Horario | null>(null);
  
    useEffect(() => {
      const obtenerHorarios = async () => {
        // lugar para la logica, mientras tanto para las pruebas usamos lo de abajo
        // ejemplo de horarios para prueba
        const horariosObtenidos: Horario = {
          abierto: 9,
          cierre: 12,
          apertura: 8,
        };
  
        setHorarios(horariosObtenidos);
      };
  
      obtenerHorarios();
    }, []);
  
    const obtenerEstado = () => {
      if (!horarios) {
        return <Text>{horarios}</Text>;
      }
  
      const horaActual = new Date().getHours();
      const horarioAbierto = horarios.abierto;
      const horarioCierre = horarios.cierre;
  
      if (horaActual >= horarioAbierto && horaActual < horarioCierre) {
        return(
            <View style={styles.containerAbierto}>
              <Text style={{color: 'green',fontSize:16 }}>Abierto</Text>
              <View style={{flexDirection:'row', gap:6}}>
              <Text style={{ color: '#185574', marginLeft:-6,fontSize:16 }}>  hasta las</Text>
              <Text style={{fontSize:16}}>{horarioCierre}Hs</Text>
              </View>
            </View>
          ); 
      } else if (horaActual < horarioCierre) {
        //cuenta para deterinar minutos faltantes
        const minutosRestantes = (horarioCierre - horaActual) * 60;
        // realizar pruebas para el "cierra protno"
        if (minutosRestantes <= 30) {
          return <Text style={{ color: 'yellow' }}>Cierra pronto en {minutosRestantes} minutos</Text>;
        } else {
          return <Text>Cierra a las {horarioCierre}Hs</Text>;
        }
      } else {
        return (
          <View style={styles.containerCerrado}>
            <Text style={{ color: 'red' }}>Cerrado</Text>
            <View style={{flexDirection:'row', gap:6, marginLeft:-3}}>
            <Text style={{ color: '#185574'}}> abre mañana a las</Text>
            <Text>{horarios.apertura}Hs</Text>
            </View>
          </View>
        );
      }
    };
  
    return (
      <View style={styles.container}>
        {obtenerEstado()}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:-10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerAbierto: {
      flexDirection: 'row',
      gap:8,
      marginVertical:20,
      width:'100%'
    },
    containerCerrado:{
      flexDirection: 'column',
      gap:4,
      marginVertical:6,
      left:-20
    },
  });
  
  export default HorarioStatus;
  