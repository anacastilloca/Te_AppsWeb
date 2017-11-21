module.exports={
  getUrl:function () {
    var usingSSL=sails.config.ssl && sails.config.ssl.key && sails.config.ssl.cert;
    var port = sails.config.proxyPort || sails.config.port;

    var localAppUrl=
      (usingSSL ? 'https' : 'http')+ '://'+
      (sails.getHost() || 'localhost')+
      (port == 80 || port == 443 ? '' : '' + port);

    return localAppUrl;
  }
}
