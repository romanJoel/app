import React from "react";
import { View, ScrollView } from "react-native";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";

type ReligionDataType = DataType[];

const Religion = () => {
  const religionData: ReligionDataType = data["Religion"] as unknown as ReligionDataType;

  
  const firstTwoReligion = religionData.slice(0, 2);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', backgroundColor: '#fff', gap: 20,paddingBottom:8 }}>
        {/* Iterar sobre las primeras dos entradas para renderizar las SimpleCards */}
        {firstTwoReligion.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Religion;
