class SUITESCRIPT_V2 {
    constructor() {
        var obj = {};
        require([
            'N/search',
            'N/record',
            'N/log',
            'N/error'
        ], function (s, r, l, e) {
            obj.search = s;
            obj.record = r;
            obj.log = l;
            obj.error = e;
        });
        this.search = obj.search;
        this.record = obj.record;
        this.log = obj.log;
        this.error = obj.error;
    }
}
window.N$ = new SUITESCRIPT_V2();
