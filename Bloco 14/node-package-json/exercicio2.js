const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const operacao = "add"

switch(operacao){
	case "add":
		num1 + num2
		break;
	case "subt":
		num1 - num2
		break;
}

console.log(operacao)