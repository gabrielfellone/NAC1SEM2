// Compiled using marko@4.23.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada$1.0.0/src/app/views/admin/adicionar-reserva.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Reservas</title><link rel=stylesheet href=/resource/css/all.min.css><link rel=stylesheet href=/resource/css/bootstrap.min.css><link rel=stylesheet href=/resource/css/style.css></head><body><main class=main-container><header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a href=/  class=navbar-brand><i class=\"fab fa-accusoft mr-2\"></i> Pousada</a><button type=button class=navbar-toggler><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=navbar-nav><li class=nav-item><a href=/  class=nav-link>Home</a></li><li class=nav-item><a href=/quartos class=nav-link>Quartos</a></li><li class=nav-item><a href=/contato class=nav-link>Contato</a></li></ul></div><button type=button class=\"btn btn-dark\"><a href=/admin/reservas class=text-light>Admin</a></button></nav></header><div class=container><h1 class=\"mt-3 mb-3\">Fazer uma reserva</h1><form action=/reserva method=POST><div class=form-group><label for=id_quarto>Quarto</label><input type=number class=form-control id=id_quarto name=id_quarto placeholder=\"Digite o número do quarto\"></div><div class=form-group><label for=id_usuario>Cliente</label><input type=number class=form-control id=id_usuario name=id_usuario placeholder=\"Digite o id do cliente\"></div><div class=form-group><label for=data_inicio>Entrada</label><input type=date class=form-control id=data_inicio name=data_inicio placeholder=\"Digite a data de entrada\"></div><div class=form-group><label for=data_saida>Saída</label><input type=date class=form-control id name=data_saida placeholder=\"Digite a data de saída\"></div><button type=submit class=\"btn btn-dark\">Reservar</button></form></div><footer class=\"main-footer navbar-fixed-bottom bg-dark mt-3\"><div class=container><p class=\"text-light text-center p-3\">Developed by Alfredo Henrique, Gabriel Fellone, Leandro Rocha, Leticia Bora and Renan Miyamoto</p></div></footer></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "45");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pousada$1.0.0/src/app/views/admin/adicionar-reserva.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
