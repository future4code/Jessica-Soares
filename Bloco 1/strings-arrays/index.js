/*
=== Exercícios de interpretação de código ===

=== Resposta atividade 1 ===


a.  undefined
b.  null
c.  11
d.  3
a.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9


=== Resposta atividade 2 ===

SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

/*

=== Exercícios de escrita de código ===

=== Resposta Atividade 1 ===
*/

const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu e-mail?");

alert (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`);

/*

=== Resposta Atividade 2 ===

=== Atividade 2.a ===

*/

array = ["Bolo", " Sorvete", " Chocolate", " Pizza", " Pastel"];
alert (array);

/*
=== Atividade 2.b (como havia feito) ===
*/

let comida = [
"Bolo", 
"Sorvete", 
"Chocolate", 
"Pizza", 
"Pastel"
];

alert (`Essas são as minhas comidas preferidas: ${comida[0]}, ${comida[1]}, ${comida[2]}, ${comida[3]}, ${comida[4]}`);
/*Imprime na mesma linha/ um ao lado do outro*/
alert ("Essas são as minhas comidas preferidas:", comida[0], comida[1], comida[2], comida[3], comida[4]);
/*Não imprime as comidas*/
alert ("Essas são as minhas comidas preferidas: " + comida[0] + ", " + comida[1] + ", " + comida[2] + ", " + comida[3] + ", " + comida[4]);
/*Imprime na mesma linha/ um ao lado do outro*/

/*
=== Atividade 2.b (como deve ser) ===
*/

let comida = ["Bolo", "Sorvete", "Chocolate", "Pizza", "Pastel"];

console.log ("Essas são as minhas comidas preferidas:");
console.log (comida [0]);
console.log (comida [1]);
console.log (comida [2]);
console.log (comida [3]);
console.log (comida [4]);

/*
=== Atividade 2.c (como havia feito) ===
*/

const listaComidas = ["Bolo", " Sorvete", " Chocolate", " Pizza", " Pastel"];
const comidaFavorita = prompt ("Qual sua comida favorita?");
const novaLista = listaComidas.replaceAll (" Sorvete", comidaFavorita);
alert (novaLista);
/*replaceAll é um método de string, não de array*/

/*
=== Atividade 2.c (como deve ser) ===
*/

const listaComidas = ["Bolo", " Sorvete", " Chocolate", " Pizza", " Pastel"];
const comidaFavorita = prompt ("Qual sua comida favorita?");
listaComidas[1] = comidaFavorita;
console.log(listaComidas);

/*
=== Resposta Atividade 3 ===
=== Atividades 3.a/ 3.b/ 3.c ===
*/

const tarefa1 = prompt ("Liste 3 tarefas que precisam ser realizadas hoje. Tarefa 1:");
const tarefa2 = prompt ("Tarefa2");
const tarefa3 = prompt ("Tarefa 3");
const listaDeTarefas = [tarefa1, tarefa2, tarefa3];

alert (listaDeTarefas);


/*
=== Atividades 3.d/ 3.e/ 3.f ===
*/

const indiceTarefa = prompt ("Escolha o índice de uma atividade já realizada (entre 0, 1 e 2)");
listaDeTarefas.splice(indiceTarefa, 1); 

alert (listaDeTarefas);
