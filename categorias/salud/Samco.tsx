import React from "react";
import { View, Text, ScrollView } from "react-native";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";

  
  
  type SamcoDataType = DataType[];
  
  const Samco = () => {
    const samcoData: SamcoDataType = data["Samco"] as unknown as SamcoDataType;
  
    return (
     <ScrollView style={{ flex:1,  backgroundColor:'#fff'}} >
         <View style={{alignItems:'center',  backgroundColor:'#fff', gap:30, paddingBottom:4}} >
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {samcoData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </View>
     </ScrollView>
    );
  };
  
  export default Samco;