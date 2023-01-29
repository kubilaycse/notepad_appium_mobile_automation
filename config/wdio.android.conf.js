const {config} = require('./wdio.shared.conf')
const path = require('path')


config.port = 4723

config.specs = [
    './test/specs/android/add-note-screen*.js'
]

config.capabilities = [
    {
        'appium:platformName':'Android',
        'appium:platformVersion':'11.0',
        'appium:deviceName':'Pixel 4a API 30',
        'appium:automationName':'UIAutomator2',
        'appium:app': path.join(process.cwd(),'./app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true

    }
]

exports.config = config
