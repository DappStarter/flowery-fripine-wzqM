require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note oil essay idea enter off gather'; 
let testAccounts = [
"0x673c1b1702334538fb44967168597a00bbde8d6e5398d4df7c9107670795e7d1",
"0x8c53edc53c78b310a8419a33564d173e097d138e66f6dffd228caaa569b88ddf",
"0x383d43e18e335401e1b270119f63aeb7e8025c8d5cbea7e017b2df15b08709c0",
"0xcd620bf7328b1549cc158240f4d8a25eec0652c9ef9812b02b389b445504115d",
"0x63b48d6f65d78ad15cd553570e41e1489184d2df5b9faa93bccc87f98a9712f8",
"0xee5c6c23523e63021f600d7f71cd13ef7863a7296f0711b1a6a9d30ba6a3e10a",
"0x74d3a1d5ae1032e87da3fb14d34b203eb380e70c5598bafb05cda2c0667c06de",
"0xc1985f448d85e5469be9f82584437386313735bbb24e470e277355f7c4114cda",
"0x233978f0acd909d0e401f85770c97c1d4b134713f0bb4d375dc3514335c01ceb",
"0x9285e39d7f3486414b4f950a6e83e08427c31b73b850608ed5268d36bb259378"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

