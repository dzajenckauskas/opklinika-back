'use strict';

/**
 * specialist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::specialist.specialist');
