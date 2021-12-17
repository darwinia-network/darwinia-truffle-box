# Darwinia Truffle Box

- [Requirements](#requirements)
- [Installation](#installation)
- [Setup](#setup)
  * [Using the .env File](#using-the-env-file)
- [Darwinia](#darwinia)
  * [Compiling](#compiling)
  * [Migrating](#migrating)
  * [Basic Commands](#basic-commands)
  * [Testing](#testing)
- [Support](#support)

This Darwinia Truffle Box provides you with the boilerplate structure necessary to start coding for Darwinia. For detailed information on how Darwinia works, please see the documentation [here](https://docs.darwinia.network).

As a starting point, this box contains only the SimpleStorage Solidity contract. Including minimal code was a conscious decision as this box is meant to provide the initial building blocks needed to get to work on Darwinia without pushing developers to write any particular sort of application. With this box, you will be able to compile, migrate, and test Solidity code against a variety of Darwinia test networks.

## Requirements

The Darwinia Truffle Box has the following requirements:

- [Node.js](https://nodejs.org/) 10.x or later
- [NPM](https://docs.npmjs.com/cli/) version 5.2 or later
- [Truffle](https://trufflesuite.com/truffle/) version 5.3.1 or later
- Windows, Linux or MacOS

Helpful, but optional:
- [docker](https://docs.docker.com/get-docker/), version 19.03.12 or later, only dev at local
- A [MetaMask](https://metamask.io/) account

## Installation

> Note that this installation command will only work once the box is published (in the interim you can use `truffle unbox https://github.com/darwinia/darwinia-truffle-box`).

```bash
$ truffle unbox darwinia/darwinia-truffle-box
```

## Setup

### Using the env File

You will need at least one mnemonic to use with the network. The `.dotenv` npm package has been installed for you, and you will need to create a `.env` file for storing your mnemonic and any other needed private information.

The `.env` file is ignored by git in this project, to help protect your private data. In general, it is good security practice to avoid committing information about your private keys to github. The `truffle-config.js` file expects a `*_PRIVATEKEY` value to exist in `.env` for running commands on each of these networks, as well as a default `DEV_PRIVATEKEY` for the Darwinia network we will run locally.

If you are unfamiliar with using `.env` for managing your private keys, the basic steps for doing so are below:

1) Use `touch .env` in the command line to create a `.env` file at the root of your project.
2) Open the `.env` file in your preferred IDE
3) Add the following, filling in your own private keys:

```
TESTNET_PRIVATEKEY="<Your Pangolin Private Key>"
MAINNET_PRIVATEKEY="<Your Crab Private Key>"
```

4) As you develop your project, you can put any other sensitive information in this file. You can access it from other files with `require('dotenv').config()` and refer to the variable you need with `process.env['<YOUR_VARIABLE>']`.

## Darwinia

### Compiling

To compile your Darwinia contracts, run the following in your terminal:

```
npm run compile
```

This script lets Truffle know to use the `truffle-config.js` configuration file, which tells Truffle where to store your build artifacts.

### Migrating

To migrate on Darwinia, run:

```
npm run migrate --network=(pangolin | crab)
```

(remember to choose a network from these options!).

- `pangolin`: Darwinia has deployed a testnet Pangolin network. The RPC endpoint is http://pangolin-rpc.darwinia.network. In order to access this node for testing, you will need to connect a wallet  (we suggest [MetaMask](https://metamask.io/)). Save your private key in a `.env` file as `TESTNET_PRIVATEKEY`. Using an `.env` file for the private key is safer practice because it is listed in `.gitignore` and thus will not be committed.
  * In order to set up your MetaMask wallet to connect to the Pangolin testnet network, you will need to create a custom RPC network in your wallet. You can find detailed steps for this process [here](https://docs.crab.network/dvm/wallets/dvm-metamask#connect-with-metamask). You will need the following information:
    - RPC Url: `http://pangolin-rpc.darwinia.network`
    - chain id: 43

- `crab`: This is the one of mainnet for Darwinia. You will need to connect your wallet to the Crab mainnet RPC network, located at http://crab-rpc.darwinia.network

If you would like to migrate previously migrated contracts on the same network, you can run `truffle migrate --network=(pangolin | crab)` and add the `--reset` flag.

## Basic Commands

The code here will allow you to compile, migrate, and test your code against an Darwinia instance. The following commands can be run (more details on each can be found in the next section):

 To compile:
 ```
 npm run compile
 ```

 To migrate:
 ```
 npm run migrate --network=(pangolin | crab)
 ```

 To test:
 ```
 npm run test --network=(pangolin | crab)
```
### Testing

Currently, this box supports testing via Javascript/TypeScript tests. In order to run the test currently in the boilerplate, use the following command:

```
npm run test --network=(pangolin | crab)
```

## Support

Support for this box is available via the Truffle community available [here](https://www.trufflesuite.com/community).
