/**
 *@NApiVersion 2.x
 */
require(['N/record'], function(record) {
    function createAndSaveContactRecord() {
        var nameData = {
            firstname: 'John',
            middlename: 'Doe',
            lastname: 'Smith'
        };
        var objRecord = record.create({
            type: record.Type.CONTACT,
            isDynamic: true
        });
        objRecord.setValue({
            fieldId: 'subsidiary',
            value: '1'
        });
        for ( var key in nameData) {
            if (nameData.hasOwnProperty(key)) {
                objRecord.setValue({
                    fieldId: key,
                    value: nameData[key]
                });
            }
        }
        var recordId = objRecord.save({
            enableSourcing: false,
            ignoreMandatoryFields: false
        });
    }
    createAndSaveContactRecord();
});
