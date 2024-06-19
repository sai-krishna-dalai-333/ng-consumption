"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsService = void 0;
class ConsumptionDetailsService {
    mockRepo;
    constructor(consumptionDetailsRepository) {
        this.mockRepo = consumptionDetailsRepository;
    }
    async getConsumptionDetailsById(premiseId) {
        return await this.mockRepo.getConsumptionDetailsById(premiseId);
    }
}
exports.ConsumptionDetailsService = ConsumptionDetailsService;
//# sourceMappingURL=consumptionDetailsService.js.map