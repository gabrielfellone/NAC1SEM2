// Compiled using marko@4.23.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada$1.0.0/src/app/views/quartos/quartos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Quartos</title><link rel=stylesheet href=/resource/css/all.min.css><link rel=stylesheet href=/resource/css/bootstrap.min.css><link rel=stylesheet href=/resource/css/style.css></head><body><header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a href=/  class=navbar-brand><i class=\"fab fa-accusoft mr-2\"></i> Pousada</a><button type=button class=navbar-toggler><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=navbar-nav><li class=nav-item><a href=/  class=nav-link>Home</a></li><li class=nav-item><a href=/quartos class=\"nav-link active\">Quartos</a></li><li class=nav-item><a href=/contato class=nav-link>Contato</a></li></ul></div><button type=button class=\"btn btn-dark\"><a href=/admin/reservas class=text-light>Admin</a></button></nav></header><div class=container><h1 class=\"mt-3 mb-3\">Quartos</h1><div class=\"col-md-12 inline row\">");

  var $for$0 = 0;

  marko_forOf(data.quartos, function(quarto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div><div class=\"row formatcard\"><div class=\"card mr-3\" style=\"width: 22rem;\"><img class=card-img-top src=/resource/img/vip.jpg alt=\"Card image cap\"><div class=card-body><h5 class=card-title>" +
      marko_escapeXml(quarto.tipo_quarto) +
      "</h5><p class=card-text>" +
      marko_escapeXml(quarto.descricao_quarto) +
      "</p><a href=/quartos/vip class=\"btn btn-dark mr-3\">Saber mais <i class=\"fas fa-angle-right ml-2\"></i></a><a href=/reserva class=\"btn btn-white\">Reservar</a></div></div></div></div>");
  });

  out.w("</div></div><footer class=\"main-footer navbar-fixed-bottom bg-dark mt-3\"><div class=container><p class=\"text-light text-center p-3\">Developed by Alfredo Henrique, Gabriel Fellone, Leandro Rocha, Leticia Bora and Renan Miyamoto</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pousada$1.0.0/src/app/views/quartos/quartos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
