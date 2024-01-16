const SHA256 = require('crypto-js/sha256')


// definování bloku a vytvoření funkcí
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    // funkce pro zahashování bloku
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    // 
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}


// definování blockchainu a vytvoření funkcí
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    // funkce pro vytvoření Genesis bloku
    createGenesisBlock(){
        return new Block(0, "16/1/2024", "Genesis block", "0");
    }

    // funkce pro získání nejnovějšího bloku v blockchainu
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // funkce pro přidání bloku
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    // funkce pro ověření správnosti blockchainu
    isChainValid() {
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i -1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}


// vytvoření blockchainu, přidání bloků, ověření blockchainu a vypsání do konzole
let SuprHustyCoin = new Blockchain();

console.log('Mining block 1...');
SuprHustyCoin.addBlock(new Block(1, "16/01/2024", { amount: 4 }));

console.log('Mining block 2...');
SuprHustyCoin.addBlock(new Block(2, "16/01/2024", { amount: 15 }));


// SuprHustyCoin.addBlock(new Block(3, "16/01/2024", { amount: 25 }));

// SuprHustyCoin.chain[1].data = { amount: 9999999 };

// if(SuprHustyCoin.isChainValid()){
//     console.log(JSON.stringify(SuprHustyCoin, null, 4));
// }else{
//     console.log(false);
// }
