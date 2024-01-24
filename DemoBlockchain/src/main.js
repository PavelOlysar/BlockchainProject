const {Blockchain, Transaction} = require('./blockchain.js')

let suprHustyCoin = new Blockchain();

suprHustyCoin.createTransaction(new Transaction('address1', 'address2', 100));
suprHustyCoin.createTransaction(new Transaction('address1', 'address2', 50));

console.log('\n Starting the miner...');
suprHustyCoin.minePendingTransactions('xavier');

console.log('\nBalance of xavier is', suprHustyCoin.getBalanceOfAddress('xavier'));

console.log('\n Starting the miner...');
suprHustyCoin.minePendingTransactions('xavier');

console.log('\nBalance of xavier is', suprHustyCoin.getBalanceOfAddress('xavier'));