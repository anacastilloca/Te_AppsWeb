export class TerapeutaClass{
  constructor(
    public cedula?: string,
    public nombre?: string,
    public edad?:number,
    public contrasenia?: string,
    public nombreRepresentante?: string,
    public celularRepresentante?: number,
    public direccionRepresentante?: string,
    public createdAt?:Date,
    public updatedAt?:Date,
    public id?:number,
    public idTerapeuta?:number,
    public editar?:boolean
  ){}
}
