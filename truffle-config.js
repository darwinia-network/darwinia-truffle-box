/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic below. Note: .env is ignored by git in this project to keep your private information safe
require('dotenv').config();
const testnetPrivatekey = process.env["TESTNET_PRIVATEKEY"];

//uncomment to use mainnetPrivatekey, be sure to set it in the .env file
// const mainnetPrivatekey = process.env["MAINNET_PRIVATEKEY"]

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    // test net for darwinia
    pangolin: {
      network_id: 43,
      provider: function() {
        return new HDWalletProvider(testnetPrivatekey, 'http://pangolin-rpc.darwinia.network');
      }
    },
    // requires a mainnet private key; you can save this in .env or in whatever secure location
    // you wish to use
    crab: {
      network_id: 44,
      chain_id: 44,
      provider: function() {
        return new HDWalletProvider(mainnetPrivatekey, "http://crab-rpc.darwinia.network");
      }
    },
  },

  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.7.6",
      settings:  {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  },
  db: {
    enabled: false
  }
}
