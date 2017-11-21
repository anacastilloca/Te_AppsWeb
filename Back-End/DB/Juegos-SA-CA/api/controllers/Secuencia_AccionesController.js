/**
 * Secuencia_AccionesController
 *
 * @description :: Server-side logic for managing Secuencia_acciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//OJO REVISAR es para subir archivos
//npm isntall --save connect-multiparty

//var multipart = require('connect-multiparty');
//var md_upload = multipart({uploadDir:'./assets/images/secuencia_acciones'});

module.exports = {
  uploadImg:function (req, res) {
    req.file('file').upload({
        dirFile:'./assets/images/secuencia_acciones',
        maxBytes:100000
      },
      function (err, file) {
        if(err) console.log(err);
        res.json({status:'Archivo cargado exitosamente', file:file})
      });
  }




/*
  uploadImg:function (req,res) {
    var saId=req.params.id;
    var archivo_nombre='No subio';

    if(req.file){
      var archivo_path=req.file.image.path;
      var archivo_split=archivo_path.split('\\');
      var archivo_nombre = archivo_split[2];

      res.status(200).send({archivo_path:archivo_path,archivo_split:archivo_split,archivo_nombre:archivo_nombre});
    }else {
      res.status(200).send({message:'nooooo'})
    }
  },

  changeImage:function(req,res){
    var folder = '/images/secuencia_acciones';
    var id = req.params.id;
    if(req.file){
      req.file('file').upload({dirname:sails.config.appPath+'/assets'+folder},function(error,files){
        if(error) return error;
        var nameFile =  files[0].fb.split('/');
        nameFile = nameFile[(nameFile.length - 1)];
        var baseUrl = Config.getUrl();
        Secuencia_Acciones.update({id:id},{image:baseUrl + folder + "/"+nameFile}).exec(function(error,sa){
          return res.json(sa);
        });
      });
    }
  }*/

};

