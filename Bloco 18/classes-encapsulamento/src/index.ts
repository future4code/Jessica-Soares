//Exercício 1

//a) Construtor serve para inicializar uma classe.

//b) A mensagem "Chamando o construtor da classe UserAccount" foi impressa foi impressa uma vez no terminal.

 /* class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
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

  type Transaction = {
   description: string,
   value: number,
   date: string
 }
 */

//c) Podemos acessar as propriedades privadas dentro da própria classe ou por meio dos getters e setters.

//Exercício 2

class Transaction {
   private description: string;
   private value: number;
   private date: string;

   constructor(description: string, value: number, date: string) {
       this.description = description;
       this.value = value;
       this.date = date
   };

   public getDescription(): string {
       return this.description;
   };

   public getValue(): number {
       return this.value;
   };

   public getDate(): string {
       return this.date;
   };
};

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
       cpf: string,
       name: string,
       age: number
   ) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
   };

   public getCpf(): string {
       return this.cpf;
   };

   public getName(): string {
       return this.name;
   };

   public getAge(): number {
       return this.age;
   }

   public getBalance(): number {
       return this.balance;
   };

   public getTransactions(): Transaction[] {
       return this.transactions;
   };

   public setBalance(newValue: number): void {
       this.balance += newValue;
   }

   public setTransactions(newTransaction: Transaction): void {
       this.transactions = [...this.transactions, newTransaction]

       this.balance -= newTransaction.getValue()
   }
};

const myAccount = new UserAccount("111.111.111-11","Gabriel", 25)
const firstTransaction = new Transaction("Pagamento conta de luz", 200, "10/02/2023")
const secondTransaction = new Transaction("Pagamento conta de água", 100, "15/03/2023")

myAccount.setTransactions(firstTransaction)
myAccount.setTransactions(secondTransaction)
console.log(myAccount)

//Exercício 3

class Bank {
   private accounts: UserAccount[];

   constructor(accounts: UserAccount[]) {
       this.accounts = accounts;
   };

   public getAccounts(): UserAccount[] {
       return this.accounts;
   };

   public setAccounts(newAccount: UserAccount): void {
       this.accounts.push(newAccount);
   };
};