const minhaString = "string";
const meuNumero = "string";
var CorFavorita;
(function (CorFavorita) {
    CorFavorita["VERMELHO"] = "vermelho";
    CorFavorita["LARANJA"] = "laranja";
    CorFavorita["AMARELO"] = "amarelo";
    CorFavorita["VERDE"] = "verde";
    CorFavorita["AZUL"] = "azul";
    CorFavorita["ANIL"] = "anil";
    CorFavorita["VIOLETA"] = "violeta";
})(CorFavorita || (CorFavorita = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 18,
    corFavorita: CorFavorita.VERDE
};
const pessoa2 = {
    nome: "Ana",
    idade: 18,
    corFavorita: CorFavorita.VERMELHO
};
const pessoa3 = {
    nome: "Angela",
    idade: 18,
    corFavorita: CorFavorita.VIOLETA
};
console.log(pessoa1, pessoa2, pessoa3);
//# sourceMappingURL=exercicio1.js.map