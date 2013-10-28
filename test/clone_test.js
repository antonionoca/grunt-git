'use strict';

var command = require('../lib/command_clone');
var Test = require('./_common');

describe('clone', function () {
    it('should clone the repo', function (done) {
        var options = {
            repository: 'https://github.com/rubenv/gitclone-test.git'
        };

        new Test(command, options)
            .expect(["clone", "https://github.com/rubenv/gitclone-test.git"])
            .run(done);
    });

    it('should have checked out the branch', function (done) {
        var options = {
            repository: 'https://github.com/rubenv/gitclone-test.git',
            branch: 'test'
        };

        new Test(command, options)
            .expect(["clone", "--branch", "test", "https://github.com/rubenv/gitclone-test.git"])
            .run(done);
    });

    it('should clone in the chose directory', function (done) {
        var options = {
            repository: 'https://github.com/rubenv/gitclone-test.git',
            directory: 'out'
        };

        new Test(command, options)
            .expect(["clone", "https://github.com/rubenv/gitclone-test.git", "out"])
            .run(done);
    });

    it('should make a bare copy', function (done) {
        var options = {
            repository: 'https://github.com/rubenv/gitclone-test.git',
            bare: true
        };

        new Test(command, options)
            .expect(["clone", "--bare", "https://github.com/rubenv/gitclone-test.git"])
            .run(done);
    });
});
