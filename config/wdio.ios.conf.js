const {config} = require('./wdio.shared.conf')
const path = require('path')

config.port = 4723

config.specs = [
    './test/specs/ios/ios-todo-item-screen*.js'
]

config.capabilities = [
    { 
    // Xcode > Window > Devices & Simulators
    'appium:platformName':'ios',
    'appium:platformVersion':'15.0',
    'appium:deviceName':'iPhone 12',
    'appium:automationName':'XCUITest',
    'appium:app': path.join(process.cwd(),'./app/ios/UIKitCatalog.app'),
    }
]

exports.config = config


//npx wdio config/wdio.ios.conf.js