
//specifying the contents in the table 
//my ng-consumption table consists of primary key with a arrayof json objects.
//each object consists of several elements specified in the interface ConsumptionDetails
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