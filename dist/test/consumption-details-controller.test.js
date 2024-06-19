"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// consumptionDetailsController.test.ts
const consumptionDetailsController_1 = require("../consumptionDetailsController");
const consumptionDetailsService_1 = require("../service/consumptionDetailsService");
const mockData_1 = require("../mockData");
// Mock the ConsumptionDetailsService
jest.mock('../service/consumptionDetailsService', () => {
    return {
        ConsumptionDetailsService: jest.fn().mockImplementation(() => {
            return {
                getConsumptionDetailsById: jest.fn((premiseId) => Promise.resolve(mockData_1.mockData[premiseId]))
            };
        })
    };
});
describe('ConsumptionDetailsController', () => {
    let controller;
    let service;
    beforeEach(() => {
        service = new consumptionDetailsService_1.ConsumptionDetailsService();
        controller = new consumptionDetailsController_1.ConsumptionDetailsController(service);
    });
    it('should get consumption details by ID', async () => {
        const premiseId = '1234567';
        const response = await controller.getConsumptionDetailsById(premiseId);
        expect(service.getConsumptionDetailsById).toHaveBeenCalledWith(premiseId);
        expect(response).toEqual(mockData_1.mockData[premiseId]);
    });
});
//# sourceMappingURL=consumption-details-controller.test.js.map