"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsController = void 0;
class ConsumptionDetailsController {
    consumptionDetailsService;
    constructor(consumptionDetailsService) {
        this.consumptionDetailsService = consumptionDetailsService;
    }
    async getConsumptionDetailsById(premiseId) {
        return await this.consumptionDetailsService.getConsumptionDetailsById(premiseId);
    }
}
exports.ConsumptionDetailsController = ConsumptionDetailsController;
//# sourceMappingURL=consumptionDetailsController.js.map