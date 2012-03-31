var request = require('request');

var host = 'http://thoth.io/';

exports.create = function(id, data, cb) {
    if (arguments.length < 3) {
        cb = data;
        data = id;
        id = '';
    }
    if (arguments.length === 3) id = '/' + id;

    request.post({
        url: host + 'create' + id,
        json: {
            data: data
        }
    },
    function(err, res, data) {
        if (cb) {
            if (err) cb(err);
            else cb(null, data);
        }
    });
};

exports.read = function(id, cb) {
    request(host + 'read/' + id, function(err, res, data) {
        if (err) cb(err);
        else cb(null, data);
    });
};

