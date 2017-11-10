/**
 * Organizacion.js
 *
 * @description :: TODO: Entidad que contiene los datos más relevantes de una Organización, Fundación, Institución, etc.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ruc:{
      type:'integer',
      unique:true
    },
    nombre:{
      type:'string'
    },
    correo:{
      type:'string',
      unique:true
    },
    contrasenia:{
      type:'string'
    },
    direccion:{
      type:'string'
    },
    telefono:{
      type:'integer'
    },
    descripcion:{
      type:'string'
    },

    /**Para las relaciones one to many**/

    //DOMINANTE O-T
    // Una organización puede tener muchos terapeutas
    terapeutas:{
      collection:'terapeuta',
      via:'idOrganizacion'
    }

  }
};

