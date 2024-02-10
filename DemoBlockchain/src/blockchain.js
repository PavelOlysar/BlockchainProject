const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// definování transakce + funkce
class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    calculateHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    signTransaction(signingKey){
        if(signingKey.getPublic('hex') !== this.fromAddress){
            throw new Error('You cannot sign transactions for other wallets');
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signiture = sig.toDER('hex');
    }

    isValid(){
        if(this.fromAddress === null) return true;

        if(!this.signiture || this.signiture.length === 0){
            throw new Error('No signiture in this transaction.');
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signiture)
    }
}

// definování bloku a vytvoření funkcí
class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    // funkce pro zahashování bloku
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    // funkce pro Proof-of-Work (těžení bloku)
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }

    hasValidTransactions(){
        for(const tx of this.transactions){
            if(!tx.isValid()){
                return false;
            }
        }

        return true;
    }
}


// definování blockchainu a vytvoření funkcí
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    // funkce pro vytvoření Genesis bloku
    createGenesisBlock() {
        return new Block(Date.parse("2023-2101"), [], "0");
    }

    // funkce pro získání nejnovějšího bloku v blockchainu
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // funkce pro transakce
    minePendingTransactions(miningRewardAddress) {
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTx);

        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Block succesfully mined!');
        this.chain.push(block);

        this.pendingTransaction = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    // funkce pro vytvoření transakce
    addTransaction(transaction) {

        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error('Transaction must include from and to address.')
        }

        if(!transaction.isValid()){
            throw new Error('Invalid transaction.')
        }

        this.pendingTransactions.push(transaction);
    }

    // funkce pro získání množství coinů
    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    // funkce pro ověření správnosti blockchainu
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(!currentBlock.hasValidTransactions()){
                return false;
            }

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;