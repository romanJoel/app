import React from "react";
import { View, ScrollView } from "react-native";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";

type BancosDataType = DataType[];

const Religion = () => {
  const bancosData: BancosDataType = data["Bancos"] as unknown as BancosDataType;

  
  const firstTwoBancos = bancosData.slice(0, 2);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', backgroundColor: '#fff', gap: 20, paddingBottom:8 }}>
        {/* Iterar sobre las primeras dos entradas para renderizar las SimpleCards */}
        {firstTwoBancos.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Religion;
