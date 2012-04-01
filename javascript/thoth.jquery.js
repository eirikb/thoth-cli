thoth = (function() {
    var self = {};

    var host = 'http://thoth.io/';

    self.read = function(id, cb) {
        $.get(host + id, function(res) {
            if (cb) cb(null, res);
        }).error(function(err, type, message) {
            cb(message);
        });
    };

    self.create = function(id, data, cb) {
        if (arguments.length < 3) {
            cb = data;
            data = id;
            id = '';
        }

        $.post(host + id, {
            data: data
        },
        function(res) {
            if (cb) cb(null, res);
        }).error(function(err, type, message) {
            cb(message);
        });
    };

    return self;
})();

