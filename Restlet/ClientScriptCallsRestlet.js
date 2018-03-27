/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/https'], function(https) {
    return {
       pageInit : function() {
          var dataFromRestlet = https
                .get('/app/site/hosting/restlet.nl?script=200&deploy=1');
          console.log(dataFromRestlet.body);
       }
    }
 });