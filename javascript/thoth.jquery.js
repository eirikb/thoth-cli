thoth = (function() {
    var self = {};

    var host = 'http://eirikb.no:3000/';

    self.read = function(id, cb) {
        $.get(host + 'read/' + id, cb);
    };

    self.create = function(id, data, cb) {
        if (arguments.length < 3) {
            cb = data;
            data = id;
            id = '';
        }
        if (arguments.length === 3) id = '/' + id;

        $.post(host + 'create' + id, {
            data: data
        },
        cb);
    };

    return self;
})();

