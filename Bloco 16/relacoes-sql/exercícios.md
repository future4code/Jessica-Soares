### Exercício 1 ###

# Criando a tabela:
```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

# a) Chave estrangeira é a que permite referenciar elementos de outra tabela.


# b) Query:
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"099",
    "OK!",
    6,
	"001"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"100",
    "Muito bom!",
    7,
	"002"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"101",
    "Ótimo!",
    9,
	"003"
);
```

# c) Ao tentar criar uma avaliação pra um id inválido, é retornada a mensagem: "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-419651-jessica-fernandes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))".

# d) Query:
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

# e) Ao tentar apagar um filme que possui avaiação, é retornada mensagem: "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`joy-419651-jessica-fernandes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))".

