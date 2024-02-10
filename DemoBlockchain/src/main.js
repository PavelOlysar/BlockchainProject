const {Blockchain, Transaction} = require('./blockchain.js')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('136275b6853a0dc23e9aca7b55ddc1726360c62beb7d5565cd37de4e9012d7df');
const myWalletAddress = myKey.getPublic('hex');


let suprHustyCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key of someone', 50);
tx1.signTransaction(myKey);
suprHustyCoin.addTransaction(tx1);



console.log('\n Starting the miner...');
suprHustyCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', suprHustyCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', suprHustyCoin.isChainValid())