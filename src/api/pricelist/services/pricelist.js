'use strict';

/**
 * pricelist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pricelist.pricelist');
