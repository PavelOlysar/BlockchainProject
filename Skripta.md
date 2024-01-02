# Blockchain a kryptoměny skripta

## Co je to blockchain?

Blockchain je decentralizovaná a distribuovaná databáze uchovávající informace, které jsou chráněny proti neoprávněnému zásahu, jak z vnější strany, tak i ze strany samotných uzlů peer-to-peer sítě. Informace v blokchainu jsou seskupeny do bloků a každý nový blok je propojen s předchozím, vytvářející tak "řetězec bloků" – z čehož pochází název "blockchain".

### # databáze
Databáze je strukturovaný a organizovaný soubor dat, který umožňuje efektivní ukládání, správu a manipulaci s informacemi.

### # decentralizovaná
Autorita a řízení nejsou koncentrovány na jednom místě, ale jsou rozloženy do více uzlů nebo míst.\
V případě blockchainu decentralizace znamená, že nikdo nekontroluje nebo vlastní celý blockchain, ale naopak všichni jsou si rovni.

Výhody: odolnost vůči výpadkům nebo útokům, protože pravděpodobně neselžou všechny body v jeden moment

### # distribuovaná
Zpracování úkolů nebo úložiště dat není omezeno jediným centrálním počítačem, ale je rozprostřeno mezi několik počítačů či uzlů.\
V případě blockchainu, každý počítač v síti má vlastní kopii celého rětězce.

Výhody: větší bezpečnost a odolnost vůči neoprávněným změnám 

### # peer-to-peer
Způsob komunikace, kde jednotlivé počítače nebo zařízení (peery) komunikují přímo mezi sebou, aniž by byla nutná centrální autorita.\
V případě blockchainu to znamená, že bloky mezi sebou nemají centrum přes, které by komunikovali. Komunikují přímo mezi sebou.

Výhody: snižuje závislost na centrálních autoritách

## Jak blokchain funguje?

![HowBlockhainWokrs](https://assets-global.website-files.com/62b4021a458c54f6e711ba88/6348971cd967e202c6238a83_How%20Blockchain%20Works.png)\
[Odkaz na obrázek](https://assets-global.website-files.com/62b4021a458c54f6e711ba88/6348971cd967e202c6238a83_How%20Blockchain%20Works.png)

Zde jsou jednoduše vysvětlené kroky, jak blokchain zpracovává a ověřuje transakce nebo jiná data:

1. **Transakce:**
   - Uživatelé začínají tím, že provádějí transakce, například převodem kryptoměny nebo záznamem jiných dat.

2. **Seskupení do bloků:**
   - Tyto transakce jsou seskupeny do bloků s časovým razítkem.

3. **Distribuce bloku:**
   - Nový blok je distribuován do všech uzlů v síti.

4. **Ověření transakcí:**
   - Uzly v síti (počítače, které jsou součástí daného blockchainu) ověřují a potvrzují platnost transakcí pomocí matematických algoritmů.

5. **Konzensus:**
   - Blockchain vyžaduje dosažení konzensu (shody) mezi uzly ohledně platnosti nového bloku, což zajišťuje schválení změn a jeho začlenění do blockchainu. 

6. **Přídání bloku a rozdání odměn:**
   - Když uzly schválí transakce, přidají do blockchainu nový blok obsahující aktuální transakce/data a odkaz na předchozí blok v blockchainu a uzly dostanou odměnu za dosažení konzensu.

7. **Neměnnost a bezpečnost:**
   - Jakmile je blok přidán do blockchainu, stává se neměnným a odolným vůči zásahům.

8. **Opakování procesu:**
   - Celý proces se opakuje pro každý nový blok, což vytváří neustále rostoucí řetězec bloků obsahující historii všech transakcí.

Tímto způsobem blockchain poskytuje transparentní a důvěryhodný způsob záznamu transakcí, odolný vůči manipulacím, což nalezne využití nejen v oblasti kryptoměn, ale také v mnoha dalších odvětvích.

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
