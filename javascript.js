const numeros = [1, 2, 3, 4, 5];
const parte = numeros.slice(1, 4); // Do índice 1 ao 3 (exclui o 4)
console.log(parte); // [2, 3, 4]

const numerosDobro = numeros.map (num => num * 2);
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
bolo.splice(0, 1, "fatia5");
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