/**
 * @NApiVersion 2.x
 * @NScriptType restlet
 */
define(['N/record'], function (record) {
    return {
        post: function (restletBody) {
            var restletData = restletBody.data;
            var temp_record = record.create({ type: "salesorder", isDynamic: true });
            for (var key in restletData) {
                if (typeof (restletData[key]) != "object") {
                    temp_record.setValue({
                        fieldId: key,
                        value: restletBody[key]
                    });
                }
            }
            restletBody.item.forEach(function (element, index, array) {

                temp_record.selectNewLine({
                    sublistId: 'item',
                });
                for (var sublist_key in element) {
                    if (typeof (element[sublist_key]) != 'object') {
                        temp_record.setCurrentSublistValue({
                            sublistId: 'item',
                            fieldId: sublist_key,
                            value: element[sublist_key]
                        });
                    }
                }
                temp_record.commitLine({
                    sublistId: 'schedule'
                });
            });
            try {
                var response = temp_record.save();
            } catch (e) {
                return e
            }

        }
    }
});