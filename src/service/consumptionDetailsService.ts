import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse";
import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository"
import { mockConsumptionDetailsRepository } from "../mockData/mock-repo";

export class ConsumptionDetailsService {
    //creating an object for the repo class
    private consumptionDetailsRepository: ConsumptionDetailsRepository;

    //initialize the service object
    constructor(consumptionDetailsRepository: ConsumptionDetailsRepository) {
        this.consumptionDetailsRepository = consumptionDetailsRepository;
    }

   //here i have only one get method. this method uses the method which is defined in the repo class to get data.
    async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
        return await this.consumptionDetailsRepository.getConsumptionDetailsById(premiseId);
    }

}