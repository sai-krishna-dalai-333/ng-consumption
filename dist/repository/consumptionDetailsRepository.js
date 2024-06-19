// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
// import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse";
// export class ConsumptionDetailsRepository {
//     private client: DynamoDBClient;    //fetches data from the fdynamodb. high level abstraction. Data type should be considered
//     private docClient: DynamoDBDocumentClient; // fetches data from dynamodb . low lwvwl abstraction. we dont require to specify datatype
//     private tableName: string;
//     //intialize the dynamodbclient,docClient
//     constructor(tableName: string) {
//         this.client = new DynamoDBClient({ region: "us-east-1" });
//         this.docClient = DynamoDBDocumentClient.from(this.client);
//         this.tableName = tableName;
//     }
//     //it is a command used to fetch the dynamodb using primary key
//     async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
//         const command = new GetCommand({
//             TableName: this.tableName,
//             Key: {
//                 premiseId: premiseId
//             }
//         });
//         //response from dynamodb will be stored in response variable and return that response
//         const response: any = await this.docClient.send(command);
//         console.log(response);
//         return response;
//     }
// }
//# sourceMappingURL=consumptionDetailsRepository.js.map