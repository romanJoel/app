import React from "react";
import data from "../../components/cards/dataCard.json";
import SimpleCard from "../../components/cards/simpleCard";
import { DataType } from "../../type/type";
import ContainerSimplecard from "../../components/cards/ContainerSimpleCard";

  
  type EpeDataType = DataType[];
  
  const Epe = () => {
    const epeData: EpeDataType = data["Epe"] as unknown as EpeDataType;
  
    return (
         <ContainerSimplecard>
        {/* Iterar sobre los datos para renderizar las SimpleCards */}
        {epeData.map((item: DataType, index: number) => (
          <SimpleCard key={index} data={item} />
        ))}
      </ContainerSimplecard>
    );
  };
  
  export default Epe;