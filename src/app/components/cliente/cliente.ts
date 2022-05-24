export interface Cliente {
    id: String,
    nombre: String,
    nit: String,
    direccion: String,
    telefono: String,
    email: String,
    activo?: boolean,
    observaciones: String
    fechaCreacion?:Date,
    version?:number
}