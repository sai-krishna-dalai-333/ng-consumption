"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsById = exports.mockData = void 0;
exports.mockData = [
    {
        "premiseId": "00224801EEEB5C",
        "consumptionDetails": [
            {
                "billAmount": "300",
                "carbonFootprint": "50",
                "month": "Jan",
                "reading": "200"
            },
            {
                "billAmount": "330",
                "carbonFootprint": "60",
                "month": "Feb",
                "reading": "220"
            }
        ]
    },
    {
        "premiseId": "00224801EEEB5D",
        "consumptionDetails": [
            {
                "billAmount": "350",
                "carbonFootprint": "60",
                "month": "Jan",
                "reading": "200"
            },
            {
                "billAmount": "330",
                "carbonFootprint": "60",
                "month": "Feb",
                "reading": "3200"
            }
        ]
    }
];
function getDetailsById(premiseId) {
    try {
        for (const consumption of exports.mockData) {
            if (consumption.premiseId === premiseId) {
                return {
                    $metadata: { httpStatusCode: 200 },
                    Item: consumption,
                };
            }
        }
        return {
            $metadata: { httpStatusCode: 404 },
        };
    }
    catch (error) {
        return {
            $metadata: { httpStatusCode: 500 },
        };
    }
}
exports.getDetailsById = getDetailsById;
//# sourceMappingURL=mockData.js.map