/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 */
define(['N/record', 'N/error', 'N/search'],
    function (record, error, search) {
        function doValidation(args, argNames, methodName) {
            for (var i = 0; i < args.length; i++)
                if (!args[i] && args[i] !== 0)
                    throw error.create({
                        name: 'MISSING_REQ_ARG',
                        message: 'Missing a required argument: [' + argNames[i] + '] for method: ' + methodName
                    });
        }
        // Get a standard NetSuite record
          // Get list record
        /**@name _post
         * @author sathishkumar
         * @description Getlist of records with the specified columns
         * @example 
          var url = 'paste_restlet_url_here'
                   $.ajax({
                            type: "GET",
                            url: url,
                            headers:{authorization:"NLAuth nlauth_account=123456, nlauth_email=jsmith%40ABC.com, nlauth_signature=xxxx"},
                            success: res=>{
                                console.log(res)
                            },
                            dataType: 'application/json'
                            });
         */
        function _get(context) {

            var employee_search = search.create({
                type: 'employee',

                columns: [{
                        name: 'email'
                    },
                    {
                        name: 'firstname'
                    }, {
                        name: 'lastname'
                    }, 
                    {
                        name:'subsidiary'
                    }
                ],
                filter:[]
            });
            
            var searchResult = employee_search.runPaged({
                pageSize: 1000
            }).fetch({
                index: 0
            });

            return searchResult;
        }
        return {
            get: _get
        };
    });