export class EstudianteClass{
  constructor(
    public cedula?: string,
    public nombre?: string,
    public edad?:number,
    public contrasenia?: string,
    public nombreRepresentante?: string,
    public celularRepresentante?: number,
    public direccionRepresentante?: string,
    public idTerapeuta?:number,
    public idOrganizacion?:number,
    public createdAt?:Date,
    public updatedAt?:Date,
    public id?:number,
    public editar?:boolean
  ){}
}
