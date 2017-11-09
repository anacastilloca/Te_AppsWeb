/**
 * Organizacion.js
 *
 * @description :: TODO: Entidad que contiene los datos más relevantes de una Organización, Fundación, Institución, etc.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    correo:{
      type:'string'
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
    }

  }
};

