/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
define([],
    function() {
        function render(params) {
            params.portlet.title = 'My Portlet';
            var content = '<td><span><b>Hello!!!</b></span></td>';
            params.portlet.html = content;
        }
        return {
            render: render
        };
    });