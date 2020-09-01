// Compiled using marko@4.23.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada$1.0.0/src/app/views/home/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Pousada</title><link rel=stylesheet href=/resource/css/all.min.css><link rel=stylesheet href=/resource/css/bootstrap.min.css><link rel=stylesheet href=/resource/css/style.css></head><body><main class=\"main-container container-imagem\"><header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a href=/  class=navbar-brand><i class=\"fab fa-accusoft mr-2\"></i> Pousada</a><button type=button class=navbar-toggler><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=navbar-nav><li class=\"nav-item active\"><a href=/  class=nav-link>Home</a></li><li class=nav-item><a href=/quartos class=nav-link>Quartos</a></li><li class=nav-item><a href=/contato class=nav-link>Contato</a></li></ul></div><button type=button class=\"btn btn-dark\"><a href=/admin/reservas class=text-white>Admin</a></button></nav></header><div class=\"container text-center\"><div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column homepage\"><header class=\"masthead mb-auto\"><div class=inner><h3 class=\"masthead-brand text-white\">Pousada Hotel</h3><nav class=\"nav nav-masthead justify-content-center\"></nav></div></header><main role=main class=\"inner cover  text-white\"><h1 class=cover-heading>Hotel de Luxo</h1><p class=\"lead backtitulo\">Um jeito fácil para você reservar o hotel dos seus sonhos!</p><p class=lead><a href=/quartos class=\"btn btn-lg btn-secondary\">Reserve já!</a></p></main></div></div><footer class=\"main-footer navbar-fixed-bottom bg-dark mt-3\"><div class=container><p class=\"text-light text-center p-3\">Developed by Alfredo Henrique, Gabriel Fellone, Leandro Rocha, Leticia Bora and Renan Miyamoto</p></div></footer></main><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery-slim.min.js\"><\\/script>')</script><script src=../../assets/js/vendor/popper.min.js></script><script src=../../dist/js/bootstrap.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "40");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pousada$1.0.0/src/app/views/home/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
