import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Clubes from "../clubes/Clubes";
import Comercios from "../comercios/Comercios";
import Comuna from "../comuna/Comuna";
import Educacion from "../educacion/Educacion";
import Instituciones from "../instituciones/Instituciones";
import Oficios from "../oficios/Oficios";
import Profesionales from "../profesionales/Profesionales";
import Salud from "../salud/Salud";
import Transporte from "../transporte/Transporte";

let components = [ { component:<Educacion />, tag:'Educacion' },
                   { component:<Clubes />, tag:'Clubes' },
                   { component:<Comercios />, tag:'Comercios' },
                   { component:<Comuna />, tag:'Comuna' },
                   { component:<Instituciones />, tag:'Instituciones' },
                   { component:<Oficios />, tag:'Oficios' },
                   { component:<Profesionales />, tag:'Profesionales' },
                   { component:<Salud />, tag:'Salud' },
                   { component:<Transporte />, tag:'Transporte' } ]

const ContainerCategorias = () => {
  const [componenteTocado, setComponenteTocado] = useState("");
  
  const handleComponentTouch = (componente: string) => {
    setComponenteTocado(componente);
  }

  return (
    <View>
      {components.map( ( a )=>{
        return(
          <TouchableOpacity onPress={() => handleComponentTouch(`${a.tag}`)} style={style.TouchableOpacity}>
            {a.component}
          </TouchableOpacity>
      )})}
      {/* Renderiza solo el componente tocado */}
      {componenteTocado && (
        <View>
          {components.map( ( a )=>{
            return(
              componenteTocado === `${a.tag}` && a.component
          )})}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
   },
   TouchableOpacity: {
    marginBottom: 10
   },
   componentView: {
    marginBottom: 10
   }
})


export default ContainerCategorias;