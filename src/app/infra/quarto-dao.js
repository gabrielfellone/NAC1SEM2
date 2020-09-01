class QuartoDAO {
  constructor(database) {
    this._database = database;
  }


  listar() {
    return new Promise((resolve, reject) => {
      this._database.all('SELECT * FROM quarto', (err, quartos) => {
        if (err) return reject('Nenhum quarto disponivel.');
        return resolve(quartos);
      }); 
    });
  }

  listarQuartos() {
    return new Promise((resolve, reject) => {
      this._database.all('SELECT DISTINCT(tipo_quarto) FROM quarto', (err, quartos) => {
        if (err) return reject('Nenhum quarto cadastrado.');
        return resolve(quartos);
      });
    });
  }

  listarQuartosPorTipo(tipo_quarto) {
    return new Promise((resolve, reject) => {
      this._database.all(
        'SELECT * FROM quarto WHERE tipo_quarto = ?',
        [tipo_quarto],
        (err, tipoQuarto) => {
          if (err) return reject('Não foi possível encontrar o quarto do tipo ' + tipo_quarto + '.');
          return resolve(tipoQuarto);
        }
      );
    });
  }

  buscarPorId(id_quarto) {
    return new Promise((resolve, reject) => {
      this._database.get(
        'SELECT * FROM quarto WHERE id_quarto = ?',
        [id_quarto],
        (err, quarto) => {
          if (err) return reject('Não foi possível encontrar o quarto informado.');
          return resolve(quarto);
        }
      );
    });
  }

  adicionar(quarto) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `INSERT INTO quarto (tipo_quarto, descricao_quarto, valor_quarto) VALUES (?, ?, ?)`,
        [quarto.tipo_quarto, quarto.descricao_quarto, quarto.valor_quarto],
        (err) => {
          if (err) return reject('Não foi possível adicionar um novo quarto.');
          return resolve();
        }
      );
    });
  }

  atualizar(quarto) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `UPDATE quarto SET tipo_quarto = ?, descricao_quarto = ?, valor_quarto = ? WHERE id_quarto = ?`,
        [quarto.tipo_quarto, quarto.descricao_quarto, quarto.valor_quarto, quarto.id_quarto],
        (err) => {
          if (err) return reject('Não foi possível atualizar o quarto.');
          return resolve();
        }
      );
    });
  }

  excluir(id_quarto) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `DELETE FROM quarto WHERE id_quarto = ?`,
        [id_quarto],
        (err) => {
          if (err) return reject('Não foi possível excluir o quarto.');
          return resolve();
        }
      );
    });
  }
}

module.exports = QuartoDAO;