const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let resultado = "O resultado é "

switch(operacao){
	case "add":
		resultado += num1 + num2 // O "+" adiciona a string "O resultado é "
		break;
	case "subt":
		resultado += num1 - num2
		break;
}

console.log(resultado)