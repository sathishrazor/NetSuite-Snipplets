/**
 * @NApiVersion 2.x
 * @NScriptType restlet
 */
define([ 'N/record' ], function(record) {
    return {
       post : function(restletBody) {
          var restletData = restletBody.data;
          for ( var contact in restletData) {
             var objRecord = record.create({
                type : record.Type.CONTACT,
                isDynamic : true
             });
             var contactData = restletData[contact];
             for ( var key in contactData) {
                if (contactData.hasOwnProperty(key)) {
                   objRecord.setValue({
                      fieldId : key,
                      value : contactData[key]
                   });
                }
             }
             var recordId = objRecord.save({
                enableSourcing : false,
                ignoreMandatoryFields : false
             });
             log.debug(recordId);
          }
       }
    }
 });