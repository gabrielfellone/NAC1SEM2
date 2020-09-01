const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('database.db');

const USUARIO_SCHEMA = `
  CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_usuario TEXT NOT NULL,
    email_usuario TEXT NOT NULL UNIQUE,
    telefone_usuario TEXT NOT NULL UNIQUE
  )
`;
 
const QUARTO_SCHEMA = `
  CREATE TABLE IF NOT EXISTS quarto (
    id_quarto INTEGER PRIMARY KEY UNIQUE,
    tipo_quarto TEXT NOT NULL,
    descricao_quarto TEXT NOT NULL,
    valor_quarto REAL NOT NULL
  )
`;

const RESERVA_SCHEMA = `
  CREATE TABLE IF NOT EXISTS reserva (
    id_reserva INTEGER PRIMARY KEY AUTOINCREMENT,
    id_quarto INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    data_inicio TEXT NOT NULL,
    data_saida TEXT
  )
`;

const INSERT_USUARIO = `
  INSERT OR IGNORE INTO usuario (
    nome_usuario,
    email_usuario,
    telefone_usuario
  ) VALUES (?, ?, ?)
`;

const INSERT_QUARTO = `
  INSERT OR IGNORE INTO quarto (
    id_quarto,
    tipo_quarto,
    descricao_quarto,
    valor_quarto
  ) VALUES (?, ?, ?, ?)
`;

const INSERT_RESERVA = `
  INSERT OR IGNORE INTO reserva (
    id_quarto,
    id_usuario,
    data_inicio,
    data_saida
  ) VALUES (?, ?, ?, ?)
`;

database.serialize(() => {
  database.run('PRAGMA foreign_keys=ON');

  database.run(USUARIO_SCHEMA);
  database.run(INSERT_USUARIO, ['Alfredo Henrique', 'rm83993@fiap.com.br', '+55 11 91234-56780']);

  database.run(QUARTO_SCHEMA);
  for (let i = 1; i <= 15; i++) {
    if (i <= 5) database.run(INSERT_QUARTO, [i, 'Vip', '', 500]);

    database.run(INSERT_QUARTO, [i, 'Apartamento', '', 300]);
  }  

  database.run(RESERVA_SCHEMA);

  database.each('SELECT * FROM quarto', (err, quartos) => {
    console.log('quartos', quartos);
  });
});

process.on('SIGINT', () => {
  database.close(() => {
    console.log('Database closed.');
    process.exit(0);
  });
});

module.exports = database;