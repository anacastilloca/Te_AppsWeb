export class TerapeutaClass{
  constructor(
    public nombre?: string,
    public cedula?: number,
    public correo?: string,
    public contrasenia?: string,
    public direccion?: string,
    public celular?: number,
    public createdAt?:Date,
    public updatedAt?:Date,
    public id?:number,
    public idOrganizacion?:number,
    public editar?:boolean
  ){}
}
