'use strict';

/**
 * diagnose controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::diagnose.diagnose');
