import React from "react";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";

type ComunaDataType = DataType[];

const Comuna = () => {
  const comunaData: ComunaDataType = data["Comuna"] as unknown as ComunaDataType;

  return (

        <ContainerSimplecard>
       {/* Iterar sobre los datos para renderizar las SimpleCards */}
       {comunaData.map((item: DataType, index: number) => (
         <SimpleCard key={index} data={item} />
       ))}
     </ContainerSimplecard>
   );
 };
 
 export default Comuna;
