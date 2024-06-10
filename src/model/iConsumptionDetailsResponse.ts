export interface ConsumptionDetailsResponse {
    premiseId: string;
    consumptionDetails: ConsumptionDetails[];
    

}

interface ConsumptionDetails {
    month: string;
    reading: string;
    billAmount: string;
    carbonFootPrint: string;
    
}