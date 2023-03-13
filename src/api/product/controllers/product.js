'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::product.product');
module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        const qp = await this.sanitizeParams(ctx, []);
        const { results, pagination } = await strapi.service('api::product.product').find(qp, []);
        const sanitizedResults = await this.sanitizeOutput(results, ctx, []);

        return this.transformResponse(sanitizedResults, { pagination });
        // const response = await super.findOne(ctx, []);
        // return response;
    },
    async find(ctx) {
        const qp = await this.sanitizeParams(ctx, []);
        const { results, pagination } = await strapi.service('api::product.product').find(qp, []);
        const sanitizedResults = await this.sanitizeOutput(results, ctx, []);

        return this.transformResponse(sanitizedResults, { pagination });
        // const { data, meta } = await super.find(ctx, []);
        // return { data, meta };
    }
}));