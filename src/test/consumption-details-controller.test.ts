// //consumptionDetailsController.test.ts
// import { ConsumptionDetailsController } from '../controller/consumptionDetailsController';
// import { ConsumptionDetailsService } from '../service/consumptionDetailsService';
// import { mockData } from '../mockData/mockData';

// // Mock the ConsumptionDetailsService
// jest.mock('../service/consumptionDetailsService', () => {
//   return {
//     ConsumptionDetailsService: jest.fn().mockImplementation(() => {
//       return {
//         getConsumptionDetailsById: jest.fn((premiseId: string) => Promise.resolve(mockData[premiseId]))
//       };
//     })
//   };
// });

// describe('ConsumptionDetailsController', () => {
//   let controller: ConsumptionDetailsController;
//   let service: ConsumptionDetailsService;

//   beforeEach(() => {
//     service = new ConsumptionDetailsService();
//     controller = new ConsumptionDetailsController(service);
//   });

//   it('should get consumption details by ID', async () => {
//     const premiseId = '1234567';
//     const response = await controller.getConsumptionDetailsById(premiseId);

//     expect(service.getConsumptionDetailsById).toHaveBeenCalledWith(premiseId);
//     expect(response).toEqual(mockData[premiseId]);
//   });
// });
