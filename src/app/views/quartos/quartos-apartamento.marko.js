// Compiled using marko@4.23.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada$1.0.0/src/app/views/quartos/quartos-apartamento.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Apartamentos</title><link rel=stylesheet href=/resource/css/all.min.css><link rel=stylesheet href=/resource/css/bootstrap.min.css><link rel=stylesheet href=/resource/css/style.css></head><body><main class=main-container><header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a href=/  class=navbar-brand><i class=\"fab fa-accusoft mr-2\"></i> Pousada</a><button type=button class=navbar-toggler><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=\"navbar-nav justify-content-center\"><li class=nav-item><a href=/  class=nav-link>Home</a></li><li class=\"nav-item active\"><a href=/quartos class=nav-link>Quartos</a></li><li class=nav-item><a href=/contato class=nav-link>Contato</a></li></ul></div><button type=button class=\"btn btn-dark\"><a href=/admin/reservas class=text-light>Admin</a></button></nav></header><div class=container><div class=\"jumbotron jumbotron-fluid\"><div class=container><h1 class=display-4>Apartamentos</h1><p class=lead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni accusantium, facilis tempora, omnis assumenda consequuntur aspernatur sed deserunt eaque, in laudantium ea quod temporibus ut eligendi minima perferendis voluptatum.</p></div></div></div><footer class=\"main-footer navbar-fixed-bottom mt-3\"><div class=container><p class=\"text-light text-center p-3\">Developed by Alfredo Henrique, Gabriel Fellone, Leandro Rocha, Leticia Bora and Renan Miyamoto</p></div></footer></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "34");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pousada$1.0.0/src/app/views/quartos/quartos-apartamento.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
