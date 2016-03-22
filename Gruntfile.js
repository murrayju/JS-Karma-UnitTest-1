module.exports = function(grunt) {
    var customLaunchers;
    require('load-grunt-tasks')(grunt);
    customLaunchers = {
        sl_chrome_win: {
            base: 'SauceLabs',
            browserName: 'chrome',
            version: 'latest',
            platform: 'Windows 10'
        },
        sl_chrome_mac: {
            base: 'SauceLabs',
            browserName: 'chrome',
            version: 'latest',
            platform: 'OS X 10.11'
        },
        sl_chrome_linux: {
            base: 'SauceLabs',
            browserName: 'chrome',
            version: 'latest',
            platform: 'Linux'
        },
        sl_firefox_linux: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: 'latest',
            platform: 'Linux'
        },
        sl_safari: {
            base: 'SauceLabs',
            browserName: 'safari',
            version: 'latest',
            platform: 'OS X 10.11'
        }
    };
    grunt.initConfig({
        karma: {
            app: {
                options: {
                    basePath: '',
                    hostname: '127.0.0.1',
                    frameworks: ['jasmine'],
                    files: ['src/*.js', 'test/*.js'],
                    reporters: ['dots', 'saucelabs'],
                    port: 9876,
                    colors: true,
                    logLevel: "INFO",
                    customLaunchers: customLaunchers,
                    browsers: Object.keys(customLaunchers),
                    sauceLabs: {
                        testName: 'Grunt Karma Sauce Test'
                    },
                    singleRun: true,
                    captureTimeout: 120000
                }
            }
        }
    });
    
    grunt.registerTask('default', ['karma']);
};