/**
 * Terapeuta_SA.js
 *
 * @description :: TODO: Entidad que rompe la relación many to many de Terapeuta y Secuencia de Acciones.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idTerapeuta:{
      model:'Terapeuta'
    },
    idSecuenciaAcciones:{
      model:'Secuencia_Acciones'
    }


  }
};

