// nombre, apellido, ?id, ?imagen


export interface Empleado{
    id?: number;
    nombre: string;
    apellido: string;
    imagen?: Blob;

}

export interface Empleados extends Array<Empleado> {

}
