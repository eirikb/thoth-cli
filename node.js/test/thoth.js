var thoth = require('../thoth-cli.js'),
should = require('should');

describe('thoth', function() {
    var id = '';

    it('should create new thoths without error', function(done) {
        thoth.create('Hello, world', function(err, parent) {
            parent.should.have.property('id');
            parent.should.have.property('versions', 1);
            id = parent.id;
            done();
        });
    });

    it('should read created thoth parent without error', function(done) {
        thoth.read(id, function(err, parent) {
            parent.should.have.property('id');
            parent.should.have.property('versions', 1);
            done();
        });
    });

    it('should read created thoth version JSON without error', function(done) {
        thoth.read(id + '/1', function(err, item) {
            item.data.should.equal('Hello, world');
            item.should.have.property('timestamp');
            done();
        });
    });

    it('should read created thoth version attr without error', function(done) {
        thoth.read(id + '/1.data', function(err, item) {
            item.should.equal('Hello, world');
            done();
        });
    });

    it('should create new thoths version without error', function(done) {
        thoth.create(id, 'Hello, world again', function(err, parent) {
            parent.should.have.property('id', id);
            parent.should.have.property('versions', 2);
            done();
        });
    });

    it('should read created thoth version attr without error', function(done) {
        thoth.read(id + '/2.data', function(err, item) {
            item.should.equal('Hello, world again');
            done();
        });
    });

    it('should read unkown id with error', function(done) {
        thoth.read('asdf', function(err, item) {
            should.exist(err);
            should.not.exist(item);
            done();
        });
    });

    it('should read JSON unkown id with error', function(done) {
        thoth.read('asdf', function(err, item) {
            should.exist(err);
            should.not.exist(item);
            done();
        });
    });

    it('should read unkown version with error', function(done) {
        thoth.read(id + '/asdf', function(err, item) {
            should.exist(err);
            should.not.exist(item);
            done();
        });
    });

    it('should create unkown id with with error', function(done) {
        thoth.create('asdf', 'asdf', function(err, parent) {
            should.exist(err);
            should.not.exist(parent);
            done();
        });
    });
});

