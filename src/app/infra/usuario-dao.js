class UsuarioDAO {
  constructor(database) {
    this._database = database;
  }

  listar() {
    return new Promise((resolve, reject) => {
      this._database.all('SELECT * FROM usuario', (err, usuarios) => {
        if (err) return reject('Nenhum usuário cadastrado.');
        return resolve(usuarios);
      });
    });
  }

  busquePorId(id_usuario) {
    return new Promise((resolve, reject) => {
      this._database.get(
        'SELECT * FROM usuario WHERE id_usuario = ?',
        [id_usuario],
        (err, usuario) => {
          if (err) return reject('Não foi possível encontrar o usuário informado.');
          return resolve(usuario);
        }
      );
    });
  }

  adicionar(usuario) {
    console.log(usuario);
    return new Promise((resolve, reject) => {
      this._database.run(
        `INSERT INTO usuario (nome_usuario, email_usuario, telefone_usuario) VALUES (?, ?, ?)`,
        [usuario.nome_usuario, usuario.email, usuario.telefone],
        (err) => {
          if (err) return reject('Não foi possível adicionar um novo usuário.');
          return resolve();
        }
      );
    });
  }

  atualizar(usuario) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `UPDATE usuario SET nome_usuario = ?, email_usuario = ?, telefone_usuario = ? WHERE id_usuario = ?`,
        [usuario.nome_usuario, usuario.email, usuario.telefone, usuario.id_usuario],
        (err) => {
          if (err) return reject('Não foi possível atualizar o usuário.');
          return resolve();
        }
      );
    });
  }

  excluir(id_usuario) {
    return new Promise((resolve, reject) => {
      this._database.run(
        `DELETE FROM usuario WHERE id_usuario = ?`,
        [id_usuario],
        (err) => {
          if (err) return reject('Não foi possível excluir o usuário.');
          return resolve();
        }
      );
    });
  }
}

module.exports = UsuarioDAO;