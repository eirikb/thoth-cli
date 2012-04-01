$(function() {
    $('form').submit(function() {
        var $data = $('#data'),
        hash = window.location.hash.slice(1);

        if (hash.length <= 0) hash = false;
        else hash = hash.slice(0, hash.indexOf('/'));

        if (hash) {
            thoth.create(hash, $data.val(), function(err, parent) {
                if (err) $data.val('Error: ' + err);
                else window.location.hash = parent.id + '/' + parent.versions;
            });
        } else {
            thoth.create($data.val(), function(err, parent) {
                if (err) $data.val('Error: ' + err);
                else window.location.hash = parent.id + '/' + parent.versions;
            });
        }

        return false;
    });
});

$.address.change(function() {
    var $data = $('#data'),
    hash = window.location.hash.slice(1);

    if (hash.length > 0) {
        thoth.read(hash, function(err, item) {
            if (err) $data.val('Error: ' + err);
            else $data.val(item.data);

            $('#create').text('Create new version');
        });
    }
});

