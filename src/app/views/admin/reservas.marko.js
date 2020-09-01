// Compiled using marko@4.23.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada$1.0.0/src/app/views/admin/reservas.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Reservas</title><link rel=stylesheet href=/resource/css/all.min.css><link rel=stylesheet href=/resource/css/bootstrap.min.css><link rel=stylesheet href=/resource/css/style.css></head><body><main class=main-container><header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a href=/  class=navbar-brand><i class=\"fab fa-accusoft mr-2\"></i> Pousada</a><button type=button class=navbar-toggler><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=navbar-nav><li class=nav-item><a href=/  class=nav-link>Home</a></li><li class=nav-item><a href=/quartos class=nav-link>Quartos</a></li><li class=nav-item><a href=/contato class=nav-link>Contato</a></li></ul></div><button type=button class=\"btn btn-dark\"><a href=/admin/reservas class=text-light>Admin</a></button></nav></header><div class=container><h1 class=\"mt-3 mb-3\">Gerenciar reservas</h1><table class=\"table table-striped table-hover\"><thead class=thead-dark><tr><td>Reserva</td><td>Quarto</td><td>Cliente</td><td>Entrada</td><td>Saída</td><td>Editar</td><td>Excluir</td></tr></thead><tbody id=item-reserva>");

  var $for$0 = 0;

  marko_forOf(data.reservas, function(reserva) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "item-reserva_" + (reserva.id_reserva == null ? "" : reserva.id_reserva)) +
      "><td>" +
      marko_escapeXml(reserva.id_reserva) +
      "</td><td>" +
      marko_escapeXml(reserva.id_quarto) +
      "</td><td>" +
      marko_escapeXml(reserva.id_usuario) +
      "</td><td>" +
      marko_escapeXml(reserva.data_inicio) +
      "</td><td>" +
      marko_escapeXml(reserva.data_saida) +
      "</td><td><button type=button data-toggle=modal" +
      marko_attr("data-whatever", reserva.id_reserva) +
      " data-target=#editarReserva><i class=\"fas fa-edit text-dark\"></i></button></td><td><button type=button" +
      marko_attr("data-ref", reserva.id_reserva) +
      " data-type=delete><i class=\"fas fa-trash text-dark\"></i></button></td></tr>");
  });

  out.w(" </tbody></table></div><div class=\"modal fade\" id=editarReserva tabindex=-1 role=dialog aria-labelledby=editarReservaLabel aria-hidden=true><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=editarReservaLabel>Atualizar Reserva: </h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><form action=/atualizar method=POST><div class=form-group><div><label for=id_reserva>ID</label><input type=number class=\"form-control disabled\" id=id_reserva name=id_reserva></div> <div><label for=id_quarto>Quarto</label><input type=number class=form-control id=id_quarto name=id_quarto placeholder=\"Digite o número do quarto\"></div><div class=form-group><label for=id_usuario>Cliente</label><input type=number class=form-control id=id_usuario name=id_usuario placeholder=\"Digite o id do cliente\"></div><div class=form-group><label for=data_inicio>Entrada</label><input type=date class=form-control id=data_inicio name=data_inicio placeholder=\"Digite a data de entrada\"></div><div class=form-group><label for=data_saida>Saída</label><input type=date class=form-control id name=data_saida placeholder=\"Digite a data de saída\"></div></div><button type=submit class=\"btn btn-dark\">Atualizar</button></form></div><div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Fechar</button></div></div></div></div><footer class=\"main-footer navbar-fixed-bottom bg-dark mt-3\"><div class=container><p class=\"text-light text-center p-3\">Developed by Alfredo Henrique, Gabriel Fellone, Leandro Rocha, Leticia Bora and Renan Miyamoto</p></div></footer></main><script src=/resource/js/delete-reserva.js></script><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js></script><script>\r\n  $('#editarReserva').on('show.bs.modal', function (event) {\r\n    var button = $(event.relatedTarget) \r\n    var recipient = button.data('whatever') \r\n    var modal = $(this)\r\n    modal.find('#id_reserva').val(recipient)\r\n  });</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "82");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pousada$1.0.0/src/app/views/admin/reservas.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
