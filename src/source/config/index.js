var path = require('path');
const ethers = require('ethers');
const abi = require ('./abi');
const root = path.normalize(__dirname + '/..');

const env = process.env.ENV || "staging"; // u can use local or online. let change it "local or staging"

var main_config = {
    env: env,
            host: '0.0.0.0',
            port: 6969,

            secret: 'db591d26716a5fbccf9e1068604d2a4e33e5d77e74c65949e5a70a60bcf59c06', //JWT
            ownerSecretKey: '63B3B3D1E9F089A1333066BF4E4832EC48FCBC3720FDECA1930D27AC48965983',
            provider: ethers.getDefaultProvider('kovan'),

            userBehaviorAddress: '0xcB586EF5EdC25a7EDA6e342ac58283E591518eA8',
            userBehaviorABI: abi.userBehaviorABI,

            tokenAddress: '0xFAbceC527C76F9e294Ea3E2DB42EA88060129f8B',
            tokenABI: abi.tokenABI,
            
            root_dir: root,
            models_dir: root + '/models',
            controllers_dir: root + '/controllers',
            library_dir: root + '/library',
            web_dir: root + '/web',
}

module.exports = Object.assign(main_config, require('./env/'+env) || {});