const numeros = [1, 2, 3, 4, 5];
const parte = numeros.slice(1, 4); // Do índice 1 ao 3 (exclui o 4)
console.log(parte); // [2, 3, 4]

const numerosDobro = numeros.map (a => a * 2); //função anônima e arrow function
console.log(numerosDobro)

const nomes = ["Maria", "Roberto", "IceCream"];
const minus = nomes.map (nome => nome.toLowerCase());
console.log(minus);


const mandarim = {
  alfabeto: null,
}
const coreano = {
  alfabeto: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", 
    "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"]
}
const portugues = {
  alfabeto: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}
const lingua = {
  mandarim,
  coreano,
  portugues
}

const naoTemAlfabeto = Object.keys(lingua).filter(a => lingua[a].alfabeto === null);

console.log(naoTemAlfabeto)

const temAlfabeto = Object.keys(lingua).filter(a => lingua[a].alfabeto !== null);

console.log(temAlfabeto)

const bolo = ["fatia1", "fatia2", "fatia3", "fatia4"];
bolo.splice(4, 1,  "fatia5", "fatia6");
console.log(bolo);

const bolo2 = ["fatia1", "fatia2", "fatia3", "fatia4"];
bolo2.push("fatia5")
console.log(bolo2);

const departamentos = ["Recursos", "Humanos", "Tecnologia", "Informática"];
const vogais = ["a", "e", "i", "o", "u"]

const sigla = departamentos.reduce((i, word) => {
  let letra1 = word[0].toUpperCase();
  let letra2 = word[1];

  if (vogais.includes(letra2)) {
    return i + letra1 + letra2;
  }
  return i + letra1; 
}, ""); //RecursosHuTeI, caso nao inicie essa string vazia

console.log(sigla); //ReHuTeI


const pessoas = [
  { nome: "Rafayel", idade: 29},
  { nome: "Sylus", idade: 28}
];

 pessoas.sort((a, b) => a.idade - b.idade);

 console.log(pessoas)

// const adjetivos = [
//   {tipo: "inteligente", nome: "zayne" },
//   {tipo: "engraçado", nome: "rafayel" },
//   {tipo: "fofo", nome: "xavier" }

// ]

// tipos.sort((a,b,c) => a.tipo.localeCompare(c.tipo, b.tipo));

const adjetivos = [
  {tipo: "inteligente", nome: "zayne" },
  {tipo: "engraçado", nome: "rafayel" },
  {tipo: "fofo", nome: "xavier" }

]

//adjetivos.sort((a,b) => a.tipo.localeCompare(b.tipo));
adjetivos.sort((a,b) => b.tipo.localeCompare(a.tipo));

console.log(adjetivos)

// Definição das cores disponíveis no jogo
const cores = ["Vermelho", "Azul", "Verde", "Amarelo"];

// Gerar todas as cartas possíveis (1 a 6 em cada cor)
const cartasKittyCards = [];
for (let cor of cores) {
    for (let numero = 1; numero <= 6; numero++) {
        cartasKittyCards.push(`${cor} ${numero}`);
    }
}

// Função para embaralhar as cartas usando Fisher-Yates Shuffle
function embaralharCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

// Função para puxar uma carta
function puxarCarta() {
    if (cartasKittyCards.length === 0) {
        console.log("Não há mais cartas disponíveis!");
        return;
    }
    
    embaralharCartas(cartasKittyCards); // Embaralha antes de puxar
    const cartaPuxada = cartasKittyCards.pop(); // Remove a última carta
    console.log(`🎴 Você puxou: ${cartaPuxada}!`);
}

// Exemplo de uso:
puxarCarta(); // Rode essa função no console para puxar uma carta aleatória
