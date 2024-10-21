import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import busIcon from '../../assets/images/autobu.png';
import saludIcon from '../../assets/images/salud.png';
import oficiosIcon from '../../assets/images/herramientas.png';
import profesionalesIcon from '../../assets/images/servicios-profesionales.png';
import comerciosIcon from '../../assets/images/tienda.png';
import institucionesIcon from '../../assets/images/organizacion.png';
import clubesIcon from '../../assets/images/deporte.png';
import educacionIcon from '../../assets/images/estudio.png';
import sugerenciaIcon from '../../assets/images/idea.png';
import comunaIcon from '../../assets/images/colegio.png'


// crear archivo nuevo e importar.
const categoryData = [
  { title: 'Transporte', route: 'Transporte', img:busIcon },
  { title: 'Salud', route: 'Salud', img:saludIcon},
  { title: 'Oficios', route: 'Oficios', img:oficiosIcon },
  { title: 'Profesionales', route: 'Profesionales', img:profesionalesIcon },
  { title: 'Comercios', route: 'Comercios', img:comerciosIcon },
  { title: 'Instituciones', route: 'Instituciones', img:institucionesIcon },
  { title: 'Clubes', route: 'Clubes', img:clubesIcon },
  { title: 'Comuna', route: 'Comuna', img:comunaIcon },
  { title: 'Educacion', route: 'Educacion', img:educacionIcon },
  { title: 'Sugerencias', route: 'Sugerencias', img:sugerenciaIcon },
];

const Home = ({ navigation }: any) => {
  const renderCategoryItem = (title: string, route: string, img: any) => (
    <TouchableOpacity
      key={title}
      style={styles.categoryContainer}
      onPress={() => navigation.navigate(route)}
    >
      <View style={styles.categoryItem}>
        <Image source={img} style={styles.categoryIcon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

// divide el array "catedoryData" en sub-array de 2 elementos cada uno.
//utilizando la función RubArray. (Rub = Rubro, para no volver a usar category o categoria) 
// despues, usa los sub-arrays para renderizar los elementos en filas de dos elementos cada una.
  const RubArray = (array: any, RubSize: number) => {
    const RubedArray = [];
    for (let i = 0; i < array.length; i += RubSize) {
      RubedArray.push(array.slice(i, i + RubSize));
    }
    return RubedArray;
  };

  const categoryRubs = RubArray(categoryData, 2);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Encabezado <View style={styles.contenedorEncabezado}><Text style={styles.encabezado}>Categorias</Text></View> */}
        {/* Container row */}
        <View style={styles.containerRow}>
          <View style={{ marginTop: 10 }}>
            {categoryRubs.map((row, index) => (
              <View style={styles.row} key={index}>
                {row.map((category: { title: string; route: string; img:any; }) =>
                  renderCategoryItem(category.title, category.route, category.img)
                )}

              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  containerRow: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 25,
    top:12
  },
  encabezado: {
    color: '#194761',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 32,
    marginBottom: 20,
  },
  categoryContainer: {
    width: 165,
    height: 150,
    backgroundColor: '#F4F8FE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  categoryItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    letterSpacing: 2,
    textAlign: 'center',
    color: "#138bce"
  },
});

export default Home;
