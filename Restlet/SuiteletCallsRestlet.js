/**
* @NApiVersion 2.x
* @NScriptType Suitelet
*/
define(['N/https', 'N/url'], function(https, urlMod) {
    return {
        onRequest : function(options) {
          var url = urlMod.resolveScript({
            scriptId: 'customscript196',
            deploymentId: 'customdeploy1',
            returnExternalUrl: true,
            params: {parametername: 'value'}
          });

          var headers = {'Authorization': 'NLAuth nlauth_account=12345, nlauth_email=john@smith.com, nlauth_signature=Welcome123, nlauth_role=3'};

          var response = https.get({url: url, headers: headers});

          options.response.write(response.body);
        }
    };
});