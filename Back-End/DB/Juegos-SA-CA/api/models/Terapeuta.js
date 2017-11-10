/**
 * Terapeuta.js
 *
 * @description :: TODO: Entidad que contiene la información más relevante de los terapeutas.
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
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO O-T
    //Un Terapeuta solo puede pertener a una Organización
    idOrganizacion:{
      model:'Organizacion'
    },

    //DOMINANTE T-E
    //Un terapeuta puede tener varios estudiantes
    estudiantes:{
      collection:'estudiante',
      via:'idTerapeuta'
    },

    //DOMINANTE T-CA
    //Un terapeuta puede crear muchos campos semánticos de comunicación alternativa
    camposSemanticos:{
      collections:'campoSemantico_T',
      via:'idTerapeuta'
    },

    //DOMINANTE T-SA
    //Un terapeuta puede crear muchas secuencia de acciones
    secuenciasAcciones:{
      collections:'secuenciaAcciones_T',
      via:'idTerapeuta'
    }





  }
};

