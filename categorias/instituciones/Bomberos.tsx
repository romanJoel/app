import React from "react";
import { View, ScrollView } from "react-native";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";

type BomerosDataType = DataType[];

const Bomberos = () => {
  const bomberosData: BomerosDataType = data["Bomberos"] as unknown as BomerosDataType;

  return (
      <ContainerSimplecard>
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {bomberosData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </ContainerSimplecard>
  );
};

export default Bomberos;
