/**
 * Estudiantes.js
 *
 * @description :: TODO: Entidad que contiene la información más relevante de un Estudiante.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cedula:{
      type:'integer',
      unique:true
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
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO T-E
    //Un estudiante solo puede pertenecer a un Terapeuta
    idTerapeuta:{
      model:'Terapeuta'
    },

    /**Para las relaciones many to many**/

    //DOMINANTE E-CA
    //Un estudiante puede tener muchos campos semánticos de comunicación alternativa
    camposSemanticos:{
      collections:'campoSemantico_E',
      via:'idEstudiante'
    },

    //DOMINANTE E-SA
    //Un estudiante puede tener muchas secuencia de acciones
    secuenciasAcciones:{
      collections:'secuenciaAcciones_E',
      via:'idEstudiante'
    }



  }
};

