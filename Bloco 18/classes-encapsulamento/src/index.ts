//Exercício 1

//a) Construtor serve para inicializar uma classe.

//b) A mensagem "Chamando o construtor da classe UserAccount" foi impressa foi impressa uma vez no terminal.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    //private transactions: Transaction[] = []; *Linha com erro
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       
    }

  }

  const user: UserAccount = new UserAccount("12345678910", "jess", 30)
  console.log(user)

//c) Podemos acessar as propriedades privadas dentro da própria classe ou por meio dos getters e setters.