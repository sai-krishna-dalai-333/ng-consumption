"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsRepository = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class ConsumptionDetailsRepository {
    client;
    docClient;
    tableName;
    constructor(tableName) {
        this.client = new client_dynamodb_1.DynamoDBClient({ region: "us-east-1" });
        this.docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(this.client);
        this.tableName = tableName;
    }
    async getConsumptionDetailsById(customerId) {
        const command = new lib_dynamodb_1.GetCommand({
            TableName: this.tableName,
            Key: {
                customerId: customerId
            }
        });
        const response = await this.docClient.send(command);
        console.log(response);
        return response;
    }
}
exports.ConsumptionDetailsRepository = ConsumptionDetailsRepository;
//# sourceMappingURL=consumptionDetailsRepository.js.map