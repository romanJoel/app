import React from "react";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";


  
  type AguaDataType = DataType[];
  
  const Agua = () => {
    const aguaData: AguaDataType = data["Agua"] as unknown as AguaDataType;
  
    return (
     
         <ContainerSimplecard>
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {aguaData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </ContainerSimplecard>
     
    );
  };
  
  export default Agua;