/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
define(['N/search'],
    function(search) {
        function render(params) {
            var isDetail = (params.column === 2);
            var portlet = params.portlet;
            portlet.title = isDetail ? "My Detailed List" : "My List";
            portlet.addColumn({
                id: 'internalid',
                type: 'text',
                label: 'Number',
                align: 'LEFT'
            });
            portlet.addColumn({
                id: 'entityid',
                type: 'text',
                label: 'ID',
                align: 'LEFT'
            });
            if (isDetail) {
                portlet.addColumn({
                    id: 'email',
                    type: 'text',
                    label: 'E-mail',
                    align: 'LEFT'
                });
                portlet.addColumn({
                    id: 'custentity_multiselect',
                    type: 'text',
                    label: 'Multiselect',
                    align: 'LEFT'
                });
            }
            var filter = search.createFilter({
                name: 'email',
                operator: search.Operator.ISNOTEMPTY
            });
            var customerSearch = search.create({
                type: 'customer',
                filters: filter,
                columns: ['internalid', 'entityid', 'email', 'custentity_multiselect']
            });
            var count = isDetail ? 15 : 5;
            customerSearch.run().each(function(result) {
                portlet.addRow(result.getAllValues());
                return --count > 0;
            });
        }
        return {
            render: render
        };
    });