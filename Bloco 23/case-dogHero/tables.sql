
CREATE TABLE IF NOT EXISTS Passeio_DogHero (
    id VARCHAR(64) PRIMARY KEY,
    status VARCHAR (64) NOT NULL,
    data VARCHAR(64) NOT NULL,
    duração INT NOT NULL,
    quantidade_dogs INT NOT NULL,
    hora_início VARCHAR (64) NOT NULL,
    preço_total REAL NOT NULL
);


