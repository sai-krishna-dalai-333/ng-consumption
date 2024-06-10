import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse";
import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository"
import { mockConsumptionDetailsRepository } from "../mockData/mock-repo";

export class ConsumptionDetailsService {
    private consumptionDetailsRepository: ConsumptionDetailsRepository;

    constructor(consumptionDetailsRepository: ConsumptionDetailsRepository) {
        this.consumptionDetailsRepository = consumptionDetailsRepository;
    }

    async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
        return await this.consumptionDetailsRepository.getConsumptionDetailsById(premiseId);
    }

}