import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse";

//this method is used to convert the json object into json api format
//parameter should be json response from the controller method.
//here consumption is json response from the controller
export const buildConsumptionResponse = (consumption) => {
    //conversion into json API

    //example of json api data

    // {
    //     "data": {
    //       "type": "users",
    //       "id": "1",
    //       "attributes": {
    //         "name": "John Doe",
    //         "email": "john.doe@example.com"
    //       }
    //     }
    //   }
      
    const getConsumptionJsonApi = {
        //mention jsonapi version
        "jsonapi": {
            "version": "1.0"
        },

        //data should contain primaryId
        "data": {
            "type": "consumptionDetails",
            //attributes should contain the values inside it
            "attributes": {
                "premiseId": consumption.Item.premiseId,

                "consumption_details": consumption.Item.consumptionDetails.map(consumptionDeatil => ({
                    month: consumptionDeatil.month,
                    reading: consumptionDeatil.reading,
                    billAmount: consumptionDeatil.billAmount,
                    carbonFootPrint: consumptionDeatil.carbonFootPrint,


                }))
            }
        }
    };
    //return that object
    return getConsumptionJsonApi;
};


