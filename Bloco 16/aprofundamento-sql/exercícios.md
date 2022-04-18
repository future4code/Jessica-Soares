### Exercício 1 ###

# a) A query "ALTER TABLE Actor DROP COLUMN salary;" deleta a propriedade "salary".

# b) A query "ALTER TABLE Actor CHANGE gender sex VARCHAR(6);" altera a propriedade gender para que aceite até  6 caracteres.

# c) A query "ALTER TABLE Actor CHANGE gender gender VARCHAR(255);" altera a propriedade gender para que aceite até 255 caracteres.

# d) Query:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


### Exercício 2 ###

# a) Query:
```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";
```

# b) Queries:
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

# c) Query:
```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

# d) Ao tentar atualizar um dado que não existe, a mensagem retornada: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0".

### Exercício 3 ###

# a) Query:
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

# b) Query:
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

### Exercício 4 ###

# a) Query:
```sql
SELECT MAX(salary) FROM Actor;
```

# b) Query:
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

# c) Query:
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

# D) Query:
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5 ###

# a) A query abaixo retona a quantidade de pessoas por gênero:
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

# b) Query:
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

# c) Query:
```sql
SELECT * FROM Actor
ORDER BY salary;
```

# d) Query:
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

# e) Query:
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6 ###

# a) Query:
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

# b) Query:
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

# c) Queries:
```sql
UPDATE Movie
SET
	playing_limit_date = "2022-01-30"
WHERE id = "001";
```

```sql
UPDATE Movie
SET
	playing_limit_date = "2022-04-30"
WHERE id = "002";
```

# d) Query:
```sql
UPDATE Movie
SET synopsis = "Testando"
WHERE id = "004";
```
Ao tentar fazer a query acima, depois que o filme com o id "004" foi deletado, é retornada a mensagem: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0".



