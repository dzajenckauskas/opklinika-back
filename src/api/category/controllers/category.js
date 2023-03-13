'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::category.category');
module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async findOne(ctx) {
        const qp = await this.sanitizeParams(ctx);
        const { results, pagination } = await strapi.service('api::category.category').find(qp, []);
        const sanitizedResults = await this.sanitizeOutput(results, ctx, []);

        return this.transformResponse(sanitizedResults, { pagination });
    }
}));