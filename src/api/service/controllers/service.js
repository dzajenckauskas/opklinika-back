'use strict';

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::service.service');

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
    async findOne(ctx) {

        const response = await super.findOne(ctx, []);
        return response;
    },
    async find(ctx) {

        const { data, meta } = await super.find(ctx, []);
        return { data, meta };
    }
}));