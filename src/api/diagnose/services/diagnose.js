'use strict';

/**
 * diagnose service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diagnose.diagnose');
