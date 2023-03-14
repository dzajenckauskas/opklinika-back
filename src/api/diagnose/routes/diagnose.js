'use strict';

/**
 * diagnose router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::diagnose.diagnose');
