const database = require('../../config/database');
const QuartoDAO = require('../infra/quarto-dao');
const ReservaDAO = require('../infra/reserva-dao');
const UsuarioDAO = require('../infra/usuario-dao');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.marko(
      require('../views/home/home.marko'),
    );
  });

  app.get('/quartos', (req, res) => {
    const dao = new QuartoDAO(database);

    dao.listar()
      .then(quartos => res.marko(
        require('../views/quartos/quartos.marko'),
        {quartos}
      )).catch(err => console.error(err));
  });

  app.get('/quartos/vip', (req, res) => {
    const dao = new QuartoDAO(database);

    dao.listarQuartosPorTipo()
      .then(quartosVip => res.marko(
        require('../views/quartos/quartos-vip.marko'),
        {quartosVip}
      )).catch(err => console.error(err));
  });

  app.get('/quartos/apartamento', (req, res) => {
    const dao = new QuartoDAO(database);

    dao.listarQuartosPorTipo()
      .then(apartamentos => res.marko(
        require('../views/quartos/quartos-apartamento.marko'),
        {apartamentos}
      )).catch(err => console.error(err));
  });

  app.get('/reserva', (req, res) => {
    res.marko(require('../views/admin/adicionar-reserva.marko'));
  });

  app.post('/reserva', (req, res) => {
    const dao = new ReservaDAO(database);
    if(validacao(req.body)){
    dao.adicionar(req.body)
      .then(res.redirect('/admin/reservas'))
      .catch(err => console.error(err));
    }
  });

  app.delete('/admin/reservas/:id', (req, res) => {
    const id = req.params.id;
    const dao = new ReservaDAO(database);

    dao.excluir(id)
      .then(res.status(200).end())
      .catch(err => console.error(err));
  });

  app.get('/admin/reservas', (req, res) => {
    const dao = new ReservaDAO(database);

    dao.listar()
      .then(reservas => res.marko(
        require('../views/admin/reservas.marko'),
        {reservas}
      )).catch(err => console.error(err));
  });

  app.get('/contato', (req, res) => {
    res.marko(require('../views/contato/contato.marko'));
  });

  app.post('/contato', (req, res) => {
    const dao = new UsuarioDAO(database);
    dao.adicionar(req.body)
      .then(res.redirect('/'))
      .catch(err => console.error(err));
  });

  app.post('/atualizar', (req, res) => {
    console.log("Atualizando reserva");
    const dao = new ReservaDAO(database);

    if(validacao(req.body)){
      dao.atualizar(req.body)
      .then(res.redirect('/admin/reservas'))
      .catch(err => console.error(err));
    }
  });

  function validacao(reserva){

    if (reserva.data_saida == "" || reserva.data_saida == null) {
      console.log("Preencha a data de saida");
      return false;
    }
    if (reserva.data_inicio == "" || reserva.data_inicio == null) {
      console.log('Preencha a data de entrada');
        return false;
    }
    if (reserva.id_usuario == "" || reserva.id_usuario == null) {
      console.log('Preencha o ID do usuario');
      return false;
    }
    if (!validaDatas(reserva.data_inicio, reserva.data_saida)) {
      console.log('Data Incorreta');
      return false;
    }
    return true;
}

function validaDatas(inicio, saida){

  var dataInicial = new Date(inicio);
  var dataFinal = new Date(saida);

  if (!dataInicial || !dataFinal) return false;
  if (dataInicial >= dataFinal) {
      console.log("Data de entrada menor que a de saida");
      return false;
  }
  const novaDataFinal = parseInt(dataFinal.getDate());
  dataFinal.setDate(novaDataFinal - 2);

  if(dataFinal <= dataInicial) {
    console.log("A data final deve ser no minimo posterior de dois dias do inicio");
    return false;
  }
  console.log("Data Correta!");
  return true;
}
}
