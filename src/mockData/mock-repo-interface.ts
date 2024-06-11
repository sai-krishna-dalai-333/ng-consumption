// customTypes.ts
export interface MockConsumptionDetailsRepository {
    getConsumptionDetailsById: (premiseId: string) => Promise<any>;
  }
  