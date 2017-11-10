/**
 * Estudiante_SA.js
 *
 * @description :: TODO: Entidad que rompe la relación many to many de Estudiante y Secuencia de Acciones.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEstudiante:{
      model:'Estudiante'
    },
    idSecuenciaAcciones:{
      model:'Secuencia_Acciones'
    }

  }
};

