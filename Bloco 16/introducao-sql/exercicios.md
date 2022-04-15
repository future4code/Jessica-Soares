### Exercício 1 ###
SHOW TABLES mostra os nomes das tabelas.
SHOW DATABASES mostra o nome do banco de dados.
DESCRIBE Actor descreve os tipos dos elementos da tabela.

### Exercício 2 ###

# a)

query:
```sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

# b)

Ao tentar adicionar um outro elemento a tabela com o id já utilizado, sistema retorna mensagem:
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Quer dizer que a entrada está duplicada.

# c)

query:
```sql 
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

Ao tentar rodar o query acima: Error Code: 1136. Column count doesn't match value count at row 1.

query correta:
```sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

# d)

query:
```sql 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

Ao tentar rodar o query acima: Error Code: 1364. Field 'name' doesn't have a default value

query correta:
```sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "Antônio Fagundes",
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

# e)

query:
```sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

Ao tentar rodar o query acima: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.

query correta:
```sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
# f)

query:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Rodrigo Santoro",
  800000,
  "1975-08-22", 
  "male"
);
```

query:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Bruna Marquezine",
  719333.33,
  "1995-08-04", 
  "female"
);
```

### Exercício 3 ###

# a) 

query:
```sql
SELECT * from Actor WHERE gender = "female";
```

# b) 

query:
```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

# c) 

query:
```sql
SELECT * from Actor WHERE gender = "invalid";
```

O retorno é nulo pois não há nenhum elemento com gênero inválido.

# d) 

query:
```sql
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

# e) 

query:
```sql
SELECT id, nome from Actor WHERE id = "002";
```
Ao tentar rodar o query acima: Error Code: 1054. Unknown column 'nome' in 'field list'.

query correto:
```sql
SELECT id, name from Actor WHERE id = "002";
```







