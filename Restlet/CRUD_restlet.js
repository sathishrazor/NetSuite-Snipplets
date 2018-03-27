/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 */
define(['N/record', 'N/error'],
    function(record, error) {
        function doValidation(args, argNames, methodName) {
            for (var i = 0; i < args.length; i++)
                if (!args[i] && args[i] !== 0)
                    throw error.create({
                        name: 'MISSING_REQ_ARG',
                        message: 'Missing a required argument: [' + argNames[i] + '] for method: ' + methodName
                    });
        }
        // Get a standard NetSuite record
        function _get(context) {
            doValidation([context.recordtype, context.id], ['recordtype', 'id'], 'GET');
            return JSON.stringify(record.load({
                type: context.recordtype,
                id: context.id
            }));
        }
        // Delete a standard NetSuite record
        function _delete(context) {
            doValidation([context.recordtype, context.id], ['recordtype', 'id'], 'DELETE');
            record.delete({
                type: context.recordtype,
                id: context.id
            });
            return String(context.id);
        }
        // Create a NetSuite record from request params
        function post(context) {
            doValidation([context.recordtype], ['recordtype'], 'POST');
            var rec = record.create({
                type: context.recordtype
            });
            for (var fldName in context)
                if (context.hasOwnProperty(fldName))
                    if (fldName !== 'recordtype')
                        rec.setValue(fldName, context[fldName]);
            var recordId = rec.save();
            return String(recordId);
        }
        // Upsert a NetSuite record from request param
        function put(context) {
            doValidation([context.recordtype, context.id], ['recordtype', 'id'], 'PUT');
            var rec = record.load({
                type: context.recordtype,
                id: context.id
            });
            for (var fldName in context)
                if (context.hasOwnProperty(fldName))
                    if (fldName !== 'recordtype' && fldName !== 'id')
                        rec.setValue(fldName, context[fldName]);
            rec.save();
            return JSON.stringify(rec);
        }
        return {
            get: _get,
            delete: _delete,
            post: post,
            put: put
        };
    });