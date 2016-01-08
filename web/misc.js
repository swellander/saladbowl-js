var templates = require('./templates');
var helpers = require('../shared/helpers');

var misc = module.exports;

/**
 * Registers all helpers.
 * Makes all templates available as partials
 */
misc.setupHandlebars = function () {
  helpers.registerAll(Handlebars);
  for (var templateName in Handlebars.templates) {
    if (Handlebars.templates.hasOwnProperty(templateName)) {
      Handlebars.registerPartial(templateName, Handlebars.templates[templateName]);
    }
  }
};
