

// consumptionDetailsService.test.ts
import { ConsumptionDetailsService } from '../service/consumptionDetailsService';
import { mockConsumptionDetailsRepository } from '../mockData/mock-consumptionDetails-repo';

describe('ConsumptionDetailsService', () => {
  let service: ConsumptionDetailsService;

  beforeEach(() => {
    service = new ConsumptionDetailsService(mockConsumptionDetailsRepository as any);
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
    await expect(service.getConsumptionDetailsById(premiseId as any))
      .rejects
      .toThrow('Premise ID cannot be null');
  });



});
