
//thisis a constant file consists of status code ,headers and messages.
//use of this file. wehenever we require the constany we dont explicity write in the code we can just call the constant file 
export enum StatusCode {
    BAD_REQUEST = 400,
    OK = 200,
    INTERNAL_SERVER_ERROR = 500,
}

export const HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE',
};


export const MESSAGES = {
    CONSUMPTION_DATA_SUCCESS: 'Consumption Data get successfully',
    INVALID_PREMISE_ID: 'Invalid premise ID',
    FAILED_TO_GET_DATA: 'Internal server Error',
};
