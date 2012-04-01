var request = require('request');

var host = 'http://thoth.io/';

exports.create = function(id, data, cb) {
    if (arguments.length < 3) {
        cb = data;
        data = id;
        id = '';
    }
    //if (arguments.length === 3) id = '/' + id;
    request.post({
        url: host + id,
        json: {
            data: data
        }
    },
    function(err, res, data) {
        if (err) cb(err);
        else if (res.statusCode !== 200) cb(new Error(data));
        else cb(null, data);
    });
};

exports.read = function(id, cb) {
    var toJSON = id.match(/\./);

    request(host + id, function(err, res, data) {
        if (err) {
            cb(err);
        } else if (res.statusCode !== 200) {
            cb(new Error(data));
        } else if (toJSON) {
            cb(null, data);
        } else {
            try {
                data = JSON.parse(data);
                cb(null, data);
            } catch(e) {
                cb(e);
            }
        }
    });
};

