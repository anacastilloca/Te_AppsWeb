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

   //Un Terapeuta solo puede pertener a una Organización
    idOrganizacion:{
      model:'Organizacion'
    },

    //Un terapeuta puede tener varios estudiantes
    estudiantes:{
      collection:'estudiante',
      via:'idTerapeuta'
    }





  }
};

