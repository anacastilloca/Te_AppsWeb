/**
 * Terapeuta_CA.js
 *
 * @description :: TODO: Entidad que rompe la relación many to many de Terapeuta y Comunicación Alternativa
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idTerapeuta:{
      model:'Terapeuta'
    },
    idComunicacionAlternativa:{
      model:'Comunicacion_Alternativa'
    }
  }
};

