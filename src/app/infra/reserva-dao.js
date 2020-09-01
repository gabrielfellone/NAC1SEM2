class ReservaDAO {
  constructor(database) {
    this._database = database;
  }
  
  listar() {
    return new Promise((resolve, reject) => {
      this._database.all('SELECT * FROM reserva', (err, reservas) => {
        if (err) return reject('Nenhuma reserva cadastrada.');
        return resolve(reservas);
      }); 
    });
  }

  buscarPorId(id_reserva) {
    return new Promise((resolve, reject) => {
      this._database.get(
        'SELECT * FROM reserva WHERE id_reserva = ?',
        [id_reserva],
        (err, result) => {
          if (err) return reject('Não foi possível encontrar a reserva informada.');
          return resolve(result);
        }
      );
    });
  }

  adicionar(reserva) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `INSERT INTO reserva (id_quarto, id_usuario, data_inicio, data_saida) VALUES (?, ?, ?, ?)`,
        [reserva.id_quarto, reserva.id_usuario, reserva.data_inicio, reserva.data_saida],
        (err) => {
          if (err) {
            console.log('error: ', err);
            // console.log('reserva:', reserva)
            return reject('Não foi possível adicionar uma nova reserva.');
          }
          return resolve();
        }
      );
    });
  }

  atualizar(reserva) {
    console.log(reserva);
    return new Promise((resolve, reject) => {
      this._database.run(
        `UPDATE reserva SET id_quarto = ?, id_usuario = ?, data_inicio = ?, data_saida = ? WHERE id_reserva = ?`,
        [reserva.id_quarto, reserva.id_usuario, reserva.data_inicio, reserva.data_saida, reserva.id_reserva],
        (err) => {
          if (err) return reject('Não foi possível atualizar a reserva.');
          return resolve();
        }
      );
    });
  }

  excluir(id_reserva) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `DELETE FROM reserva WHERE id_reserva = ?`,
        [id_reserva],
        (err) => {
          if (err) return reject('Não foi possível excluir a reserva.');
          return resolve();
        }
      );
    });
  }
}

module.exports = ReservaDAO;