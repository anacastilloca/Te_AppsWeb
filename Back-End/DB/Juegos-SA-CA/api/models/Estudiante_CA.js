/**
 * Estudiante_CA.js
 *
 * @description :: TODO: Entidad que rompe la relación many to many de Estudiante y Comunicación Alternativa.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEstudiante:{
      model:'Estudiante'
    },
    idComunicacionAlternativa:{
      model:'Comunicacion_Alternativa'
    }

  }
};

