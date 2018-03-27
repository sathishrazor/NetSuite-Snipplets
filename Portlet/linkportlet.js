/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
define(['N/search'],
    function(search) {
        function render(params) {
            var portlet = params.portlet;
            portlet.title = 'Search Engines';
            portlet.addLine({
                text: 'Google',
                url: 'http://www.google.com/'
            });
            portlet.addLine({
                text: 'Bing',
                url: 'http://www.bing.com/'
            });
        }
        return {
            render: render
        };
    });