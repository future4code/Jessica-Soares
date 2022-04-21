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

### Exercício 4 ###

# a) 

query:
```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

# b)

query:
```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

# c)

query:
```sql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

# d)

query:
```sql
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5 ###

# a) 

query:
```sql
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating VARCHAR(2) NOT NULL
);
```
# b) 

query:
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
```

# c) 

query:
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
```

# d) 

query:
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02", 
  "8"
);
```

# e) 

query:
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar 
    e procura alguém no Brasil capaz de substituí-lo. 
    O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, 
    candidato de Deus a santo.",
    "2003-01-31",
    "9"
);
```

### Exercício 6 ###

# a) 

query:
```sql
SELECT id, title, rating FROM Movie WHERE id = "001";
);
```

# b) 

query:
```sql
SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";
```

# c) 

query:
```sql
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7 ###

# a) 

query:
```sql
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

# b) 

query:
```sql
SELECT * FROM Movie
WHERE title LIKE "%maridos%" OR
      synopsis LIKE "%maridos%";
```

# C) 

query:
```sql
SELECT * FROM Movie
WHERE release_date < "2022-04-15";
```

# d) 

query:
```sql
SELECT * FROM Movie
WHERE release_date < "2022-04-15" AND 
      (title LIKE "%maridos" OR
      synopsis LIKE "%maridos%") AND rating > 7;
```








