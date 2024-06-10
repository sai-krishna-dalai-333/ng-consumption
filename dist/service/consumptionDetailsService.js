"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsService = void 0;
class ConsumptionDetailsService {
    consumptionDetailsRepository;
    constructor(consumptionDetailsRepository) {
        this.consumptionDetailsRepository = consumptionDetailsRepository;
    }
    async getConsumptionDetailsById(premiseId) {
        return await this.consumptionDetailsRepository.getConsumptionDetailsById(premiseId);
    }
}
exports.ConsumptionDetailsService = ConsumptionDetailsService;
//# sourceMappingURL=consumptionDetailsService.js.map