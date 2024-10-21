// types.ts
// data simpleCard
export type DataType={
  titulo: string;
  imagen: string;
  direccion: string;
  horarios: string;
  whatsapp: string;
  telefono: string;
  ubicacion?: string; // La ubicación es opcional
}
export type DataCardType={
  card: DataType
}


//Remis
export type RemisType = {
    imagen: string;
    nombre: string;
    apellido: string;
    vehiculo: string;
    telefono: string;
    whatsapp: string;
    patente: string;
    latitud:number;
    longitud:number; 
  };
  
  export type RemisDataType = {
    remises: RemisType[];
  };
  // farmacias 
  export type FarmaciasType = {
    farmacias: any;
    direccion: string;
    imagen: string;
    horarios: { dias: string; horario: string }[];
    nombre: string;
    latitud: number;
    longitud: number;
  };
  
  export type FarmaciasDataType = {
    farmacias: FarmaciasType[];
  };
  // Oficios
  // types.ts
export type OficiosType = {
  latitud?: number;
  longitud?: number;
  nombre?: string;
  apellido?: string;
  descripcion?: string;
  telefono?: string;
};
export type OficiosDataType ={
  oficios: OficiosType[];
}
  // Profesionales
  export type ProfesionalesType ={
  latitud?: number;
  longitud?: number;
  nombre?: string;
  apellido?: string;
  descripcion?: string;
  telefono?: string;
  }

  export type ProfesionalesDataType = {
    profesionales : ProfesionalesType[];
  }

  //Comercios
  export type ComerciosType ={
  [x: string]: any;
  latitud?: number;
  longitud?: number;
  nombre?: string;
  apellido?: string;
  descripcion?: string;
  telefono?: string;
  }

  export type ComerciosDataType = {
    comercios : ComerciosType[];
  }
