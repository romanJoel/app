import React from "react";
import { View, Text, ScrollView } from "react-native";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";

  
  type JubiladosDataType = DataType[];
  
  const Jubilados = () => {
    const jubiladosData: JubiladosDataType = data["Jubilados"] as unknown as JubiladosDataType;
  
    return (
         <ContainerSimplecard>
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {jubiladosData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </ContainerSimplecard>
    );
  };
  
  export default Jubilados;