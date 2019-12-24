// node >= 6.0.0

const request = require('supertest');
const assert = require('assert');

const CandyJs = require('../index');
const App = require('../web/Application');

const app = new App({
    'id': 1,
    'appPath': __dirname + '/app',
    'debug': true,

    'modules': {
        'bbs': 'app/modules/bbs'
    }
});
const server = new CandyJs(app).getServer();

// test mvc
describe('MVC', function() {
    it('simple get', function(done) {
        request(server)
            .get('/')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);

                assert.equal(res.text.trim(), 'mvc');

                done();
            });
    });

    it('module get', function(done) {
        request(server)
            .get('/bbs')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);

                assert.equal(res.text.trim(), 'module');

                done();
            });
    });

});
