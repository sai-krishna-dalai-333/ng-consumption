"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockConsumptionDetailsRepository = void 0;
const mockData_1 = require("./mockData");
class mockConsumptionDetailsRepository {
    async getConsumptionDetailsById(premiseId) {
        const result = (0, mockData_1.getDetailsById)(premiseId);
        return result;
    }
}
exports.mockConsumptionDetailsRepository = mockConsumptionDetailsRepository;
//# sourceMappingURL=mock-consumptionDetails-repo.js.map