import { MockConsumptionDetailsRepository } from "./mock-repo-interface";

// mockConsumptionDetailsRepository.ts
export const mockConsumptionDetailsRepository : MockConsumptionDetailsRepository= {
    getConsumptionDetailsById: jest.fn((premiseId: string) => {
      // Return your mock data here
      return Promise.resolve({
        "premiseId": premiseId,
        "consumptionDeatils": [
          // ... your mock data
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
      });
    })
  };
  