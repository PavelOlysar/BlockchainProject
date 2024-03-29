# Blockchain a kryptoměny skripta
## Co je to blockchain?

Blockchain je decentralizovaná a distribuovaná databáze uchovávající informace, které jsou chráněny proti neoprávněnému zásahu, jak z vnější strany, tak i ze strany samotných uzlů peer-to-peer sítě. Informace v blockchainu jsou seskupeny do bloků a každý nový blok je propojen s předchozím, vytvářející tak "řetězec bloků" – z čehož pochází název "blockchain".

### databáze
Databáze je strukturovaný a organizovaný soubor dat, který umožňuje efektivní ukládání, správu a manipulaci s informacemi.

### decentralizovaná
Autorita a řízení nejsou koncentrovány na jednom místě, ale jsou rozloženy do více uzlů nebo míst.\
V případě blockchainu decentralizace znamená, že nikdo nekontroluje nebo vlastní celý blockchain, ale naopak všichni jsou si rovni.

Výhody: odolnost vůči výpadkům nebo útokům, protože pravděpodobně neselžou všechny body v jeden moment

### distribuovaná
Zpracování úkolů nebo úložiště dat není omezeno jediným centrálním počítačem, ale je rozprostřeno mezi několik počítačů či uzlů.\
V případě blockchainu, každý počítač v síti má vlastní kopii celého rětězce.

Výhody: větší bezpečnost a odolnost vůči neoprávněným změnám 

### peer-to-peer
Způsob komunikace, kde jednotlivé počítače nebo zařízení (peery) komunikují přímo mezi sebou, aniž by byla nutná centrální autorita.\
V případě blockchainu to znamená, že bloky mezi sebou nemají centrum přes, které by komunikovali. Komunikují přímo mezi sebou.

Výhody: snižuje závislost na centrálních autoritách

## Jak blockchain funguje?

![HowBlockhainWokrs](https://miro.medium.com/v2/resize:fit:800/1*hZuo2zQxzf5oHzYbLCoF8g.png)\
[Odkaz na obrázek](https://miro.medium.com/v2/resize:fit:800/1*hZuo2zQxzf5oHzYbLCoF8g.png)

Zde jsou jednoduše vysvětlené kroky, jak blockchain zpracovává a ověřuje transakce nebo jiná data:

1. **Transakce:**
   - Uživatelé začínají tím, že provádějí transakce, například převodem kryptoměny nebo záznamem jiných dat

2. **Seskupení do bloků:**
   - Tyto transakce jsou seskupeny do bloků s časovým razítkem

3. **Distribuce bloku:**
   - Nový blok je distribuován do všech uzlů v síti

4. **Ověření transakcí:**
   - Uzly v síti (počítače, které jsou součástí daného blockchainu) ověřují a potvrzují platnost transakcí pomocí matematických algoritmů a snaží se o dosažení konsenzu (shody). Blockchain vyžaduje dosažení konsenzu mezi uzly ohledně platnosti nového bloku, což zajišťuje schválení změn a jeho začlenění do blockchainu

5. **Rozdání odměn:**
   -  Uzly dostanou odměnu za dosažení konsenzu, většinou ve formě kryptoměn

6. **Přídání bloku**
   - Když uzly schválí transakce, přidají do blockchainu nový blok obsahující veškeré informace

7. **Distribuce:**
   - Blok je distribuován po celém blockchainu

8. **Provedení transakce a opakování procesu:**
   - Jakmile je blok přidán do blockchainu, stává se neměnným a odolným vůči zásahům. Celý proces se opakuje pro každý nový blok, což vytváří neustále rostoucí řetězec bloků obsahující historii všech transakcí

Tímto způsobem blockchain poskytuje bezpečný a důvěryhodný způsob záznamu transakcí a jiných dat, odolný vůči manipulacím, což nalezne využití nejen v oblasti kryptoměn, ale také v mnoha dalších odvětvích.

## Jak vypadají jednotlivé bloky a celý blockchain?
                                                      
![Blockchain](https://www.c-sharpcorner.com/article/what-is-blockchain-explained-in-laymans-terms/Images/Chain%20of%20linked%20blocks.jpg)\
[Odkaz na obrázek](https://www.c-sharpcorner.com/article/what-is-blockchain-explained-in-laymans-terms/Images/Chain%20of%20linked%20blocks.jpg)

Na obrázku je vyzobrazený, jak vypadá jednoduchý blockchain a jednotlivé bloky v něm. Každý blok obsahuje:

1. **Data:**
   - Data v blockchainu jsou informace, například transakce nebo jiná digitální aktivita

2. **Timestamp:**
   - Timestamp v blockchainu je časové razítko, které přesně určuje čas provedení transakce nebo vytvoření bloku, což poskytuje důležitý prvek pro zachování chronologie událostí

3. **Hash:**
   - Hash v blockchainu je jako digitální otisk prstu bloku, je to krátký a jednoznačný kód vytvořený z obsahu bloku, který slouží k jeho jednoznačné identifikaci a zajištění, že se data v bloku nezměnila

4. **Previous Hash:**
   - Previous Hash je Hash předešlého bloku, slouží jako odkaz na předchozí blok a tvoří řetězec

Každý blockchain může vypadat trochu jinak a může obsahovat další informace, které přispívají k jeho zabezpečení nebo identifikaci. Na dalším obrázku je zobrazeno, jak vypadal blok prvního poslaného bitcoinu mezi dvěma lidmi. Block #170.

<a href="https://www.linkedin.com/pulse/how-does-block-blockchain-look-like-vijay-raghunathan">
  <img src="https://miro.medium.com/v2/resize:fit:1358/0*4V9JuACFXWYGAQdW" alt="Blok 170" width="700"/>
</a>

[Odkaz na obrázek a diskuzi ohledně tohoto bloku](https://www.linkedin.com/pulse/how-does-block-blockchain-look-like-vijay-raghunathan)


## Konsenzus

Konsenzus (shoda) slouží v blockchainu k dosažení shody mezi uzly sítě ohledně platnosti dat v novém bloku, což zajišťuje důvěryhodnost. Tato shoda mezi uzly v blockchainu je klíčová pro zajištění spolehlivosti a bezpečnosti sítě. Podrobněji si vysvětlíme mechanismy, jako je Proof-of-Work (PoW) a Proof-of-Stake (PoS), které jsou používány k dosažení této shody a udržení bezpečnosti blockchainu.

### Proof-of-Work (PoW)
Proof-of-Work (PoW) je mechanismus konsenzu v blockchainu, kde účastníci (tzv. těžaři) musí vyřešit "hashovací problém" - matematický problém s vysokou výpočetní náročností, aby mohli přidat nový blok do blockchainu a získat odměnu. Těžaři soutěží o to, kdo jako první najde správné řešení problému, což vyžaduje velký výpočetní výkon. První těžař, který problém vyřeší, má právo přidat nový blok do blockchainu a dostane odměnu (např. 10 BTC). Po přidání bloku je třeba, aby uzly v síti ověřily obsah bloku a většina odsouhlasila, že je blok platný.

![Proof-of-Work](https://miro.medium.com/v2/resize:fit:1204/1*AqgfTthyFsFAxHhXxa7NEg.png)\
[Odkaz na obrázek](https://miro.medium.com/v2/resize:fit:1204/1*AqgfTthyFsFAxHhXxa7NEg.png)


### Proof-of-Stake (PoS)
Proof-of-Stake (PoS) je alternativní mechanismus v blockchainu, kde podíl těžařů není měřen prací, kterou vykonali, ale množstvím kryptoměny, kterou těžaři vlastní. V PoS je výběr těžařů závislý na jejich podílu na množství kryptoměny, kterou vlastní (tzv. stake). Čím větší je stake, tím větší je pravděpodobnost, že daný uživatel bude vybrán k ověření transakcí a přidání bloku. V případě PoS je odměna za vyřešení problému většinou transakční poplatek za transakce, které jsou zařazeny do bloku, který byl vytvořen. Poté je třeba stejně jako u PoW, aby bylo ověřeno zda je nový blok platný.

<a href="https://cdn.hashnode.com/res/hashnode/image/upload/v1650958282969/x3UZx8rTh.jpg?auto=compress,format&format=webp">
  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1650958282969/x3UZx8rTh.jpg?auto=compress,format&format=webp" alt="PoW vs Pos" width="675"/>
</a>

[Odkaz na obrázek](https://cdn.hashnode.com/res/hashnode/image/upload/v1650958282969/x3UZx8rTh.jpg?auto=compress,format&format=webp)

### Porovnání PoW vs PoS


#### Proof-of-Work (PoW):

- Výhody: Více otestovaný a ověřený
- Nevýhody: Vyžaduje hodně energie pro těžbu

#### Proof-of-Stake (PoS):

- Výhody: Energeticky efektivnější a levnější
- Nevýhody: Může vést k nerovnoměrné distribuci kryptoměny, protože ti, kteří už mají více, mají tendenci získat ještě více


## Využití blockchainu


### Kryptoměny:

- Využití: Elektronické formy peněz, umožňují rychlé a bezpečné transakce online

### Smart kontrakty:

- Využití: Automatické a bezpečné provádění dohodnutých podmínek, například v oblasti obchodu nebo právních smluv

### Dodavatelský řetězec:

- Využití:  Zlepšuje sledování produktů od výroby po prodej, minimalizuje rizika podvodu a zabraňuje padělání výrobků

### Zdravotnictví:

- Využití: Zlepšuje správu a sdílení zdravotních dat, zajišťuje bezpečnost informací a usnadňuje spolupráci mezi zdravotnickými institucemi

## Kryptoměny

### Bitcoin

- První a nejznámější kryptoměna, která vznikla v roce 2009
- Vytvořena člověkem nebo skupinou lidí podepsanou jako Satoshi Nakamoto
- Využívá Proof-of-Work k ověření transakcí a vytváření nových bloků

### Ethereum:

- Kryptoměna, která se zaměřuje nejen na digitální peníze, ale i na provádění smart kontraktů
- Umožňuje vývojářům vytvářet decentralizované aplikace (DApps) na své platformě
- Přešlo na Proof-of-Stake, ale v minulosti využívalo Proof-of-Work


### Využití kryptoměn:

- Rychlé a bezpečné transakce online bez potřeby bankovního prostředníka
- Investiční nástroj, kde lidé mohou nakupovat a držet kryptoměny s očekáváním růstu hodnoty
- Provedení mezinárodních transakcí bez nutnosti konverze měn a vysokých bankovních poplatků

## Shrnutí

Blockchain je decentralizovaná a distribuovaná databáze, kde jsou informace uloženy v blocích propojených do řetězce. Výhody zahrnují odolnost vůči výpadkům a decentralizaci moci.

Konsenzuální mechanismy, jako je Proof-of-Work (PoW) a Proof-of-Stake (PoS), zajišťují spolehlivost blockchainu. PoW vyžaduje výpočetní práci, zatímco PoS používá podíl na kryptoměně.

Blockchain nalézá využití v kryptoměnách (jako Bitcoin a Ethereum), smart kontraktech, dodavatelském řetězci, zdravotnictví a mnoha dalších oblastech. 

Celkově blockchain mění způsob, jakým uchováváme a spravujeme data, s potenciálem přinést inovace v různých odvětvích.


## Ukázka mého demo blockchainu

Zde je ukázka mého demo blockchainu. 

Tento kód vytváří velmi jednoduchý blockchain. Kód je napsán v jazyce JavaScript. Struktura zahrnuje definici bloku s indexem, časovou známkou, daty a hashem. Blockchain začíná genesis blokem a udržuje řetězec bloků. Hashovací funkce SHA-256 je použita k vytváření hashů bloků.

Nakonci je vytvořen blockchainu s názvem "SuprHustyCoin" a jsou přidány tři bloky s různými daty. Kód obsahuje funkci pro ověření správnosti blockchainu. Pokud je blockchain platný, jsou zobrazeny všechny bloky a jejich informace. Pokud bylo něco změněno, konzole napíše false a blockchain se nevypíše.

```javascript
const SHA256 = require('crypto-js/sha256')


// definování bloku a vytvoření hashovací funkce
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

// definování blockchainu a vytvoření funkcí
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
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
        newBlock.hash = newBlock.calculateHash();
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

SuprHustyCoin.addBlock(new Block(1, "16/01/2024", { amount: 4 }));
SuprHustyCoin.addBlock(new Block(2, "16/01/2024", { amount: 15 }));
SuprHustyCoin.addBlock(new Block(3, "16/01/2024", { amount: 25 }));

if(SuprHustyCoin.isChainValid()){
    console.log(JSON.stringify(SuprHustyCoin, null, 4));
}else{
    console.log(false);
}
```

### 1. Blockchain je validní a všechny bloky na sebe zprávně navazují:

![image1](image1.png)

### 2. Blockchain není validní a něco v blockchainu bylo pozměněno:

![image1](image2.png)

### Budoucí vylepšení pro tetno jednoduchý projekt

Tento jednoduchý blockchain bude v budoucnu vylepšen těmito způsoby:

1. Proof of Work (PoW)
2. Transakce
3. Odměny za těžení
4. Peer-to-Peer (P2P) Síť
5. Podepisování transakcí
6. Přidání jednoduchého frontendu