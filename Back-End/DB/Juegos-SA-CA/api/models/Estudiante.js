/**
 * Estudiantes.js
 *
 * @description :: TODO: Entidad que contiene la información más relevante de un Estudiante.
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
    edad:{
      type:'integer'
    },
    contrasenia:{
      type:'string'
    },
    nombreRepresentante:{
      type:'string'
    },
    celularRepresentante:{
      type:'integer'
    },
    direccionRepresentante:{
      type:'string'
    }

  }
};

