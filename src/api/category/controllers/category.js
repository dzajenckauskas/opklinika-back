'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::category.category');
module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async findOne(ctx) {
        const response = await super.findOne(ctx, []);
        return response;
    },
    async find(ctx) {
        const { data, meta } = await super.find(ctx, []);
        return { data, meta };
    }
}));