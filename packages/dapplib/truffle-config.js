require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soap smile include enter orange gasp'; 
let testAccounts = [
"0x895109a4b8f3d88b1e63c9efcb22f63c5e7bc5faeb00d6e3e2d219f14e195956",
"0xccc9fbe68136df75c5fce643e4a00096819574243748f8755b307c82983834f6",
"0xa20c0dbe2b7709665ea9c32e39d52c103d2dc249c4b0dc29ab9451bce453b55c",
"0x27ed4ffb657609dacf00d8f8ed8a890cd35fc38b474a57f3fe5e1e0c01540f59",
"0x51453e5fd322cf800f77c620f3bc28acbfc94aa0e975b117edb4eac185ad4fb3",
"0xa424fc502427d1e5dbef82585b9389a0ae8bc0c33184123f228c17aa064094c5",
"0x4853041816d13e12c6cb7bff7595492bdecb9170492cc10661cc6400c4f87a34",
"0x838458e39892984498064a4ee69c585bb0ff6257e401cf8e72f7ce845e294e52",
"0xeefc2dc2e3af10f3e2b8ef7e7e7f0e01ce3eb215fee3df6228dc365248692b72",
"0x9e8900233ffc75d342c207fca7a2665e393dcf8bb3d77fe38bed558d22da3452"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

