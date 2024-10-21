import React from "react";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";

  
  type PoliciaDataType = DataType[];
  
  const Policia = () => {
    const policiaData: PoliciaDataType = data["Policia"] as unknown as PoliciaDataType;
  
    return (
         <ContainerSimplecard>
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {policiaData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}     
      </ContainerSimplecard>
    );
  };
  
  export default Policia;