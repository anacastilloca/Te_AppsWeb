/**
 * Terapeuta.js
 *
 * @description :: TODO: Entidad que contiene la información más relevante de los terapeutas.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cedula:{
      type:'integer'
    },
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
    celular:{
      type:'integer'
    }


  }
};

