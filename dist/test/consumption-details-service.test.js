"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// consumptionDetailsService.test.ts
const consumptionDetailsService_1 = require("../service/consumptionDetailsService");
const mock_consumptionDetails_repo_1 = require("../mockData/mock-consumptionDetails-repo");
describe('ConsumptionDetailsService', () => {
    let service;
    beforeEach(() => {
        service = new consumptionDetailsService_1.ConsumptionDetailsService(mock_consumptionDetails_repo_1.mockConsumptionDetailsRepository);
    });
    it('should get consumption details by ID', async () => {
        const premiseId = '1234567';
        const expectedData = {
            "premiseId": "1234567",
            "consumptionDeatils": [
                {
                    "billAmount": "300",
                    "carbonFootPrint": "50",
                    "month": "Jan",
                    "reading": "200"
                },
                {
                    "billAmount": "330",
                    "carbonFootPrint": "60",
                    "month": "Feb",
                    "reading": "220"
                }
            ]
        };
        const result = await service.getConsumptionDetailsById(premiseId);
        expect(result).toEqual(expectedData);
    });
    it('should throw an error if premiseId is less than 7 digits', async () => {
        const premiseId = '123456';
        await expect(service.getConsumptionDetailsById(premiseId))
            .rejects
            .toThrow('Premise ID must be 7 digits long');
    });
    it('should throw an error if premiseId is more than 7 digits', async () => {
        const premiseId = '12345678';
        await expect(service.getConsumptionDetailsById(premiseId))
            .rejects
            .toThrow('Premise ID must be 7 digits long');
    });
    it('should throw an error if premiseId is null', async () => {
        const premiseId = null;
        // Assuming your function accepts null as a type for premiseId
        await expect(service.getConsumptionDetailsById(premiseId))
            .rejects
            .toThrow('Premise ID cannot be null');
    });
});
//# sourceMappingURL=consumption-details-service.test.js.map