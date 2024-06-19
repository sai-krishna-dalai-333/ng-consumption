
import { getDetailsById } from "./mockData";
export class mockConsumptionDetailsRepository {
    async getConsumptionDetailsById(premiseId: string): Promise<any> {
        const result = getDetailsById(premiseId);
        return result;
    }
}


