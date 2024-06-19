import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse";
import { mockConsumptionDetailsRepository } from "../mockData/mock-consumptionDetails-repo";
export class ConsumptionDetailsService {
    private mockRepo :mockConsumptionDetailsRepository;

    constructor(consumptionDetailsRepository: mockConsumptionDetailsRepository) {
        this.mockRepo = consumptionDetailsRepository;
    }
    
    async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
        return await this.mockRepo.getConsumptionDetailsById(premiseId);
    }

}