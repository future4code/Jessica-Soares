
CREATE TABLE IF NOT EXISTS Atleta_EstanteVirtual (
    id VARCHAR(64) PRIMARY KEY,
    competicao VARCHAR (64) NOT NULL,
    atleta VARCHAR(64) NOT NULL,
    valor REAL NOT NULL,
    unidade VARCHAR(2) NOT NULL
);


CREATE TABLE IF NOT EXISTS Competicao_EstanteVirtual (
    id VARCHAR(64) PRIMARY KEY,
    competicao VARCHAR (64) NOT NULL,
    data VARCHAR(64) NOT NULL,
    status VARCHAR(64) NOT NULL
);

