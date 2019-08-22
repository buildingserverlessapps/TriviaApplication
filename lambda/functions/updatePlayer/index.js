const AWS = require('aws-sdk'),
    dynamoDb = new AWS.DynamoDB.DocumentClient(),
    IS_CORS = process.env.IS_CORS,
    TABLE_NAME = process.env.TABLE_NAME,
    PRIMARY_KEY = "id";

exports.handler = (event, context, callback) => {
    if (event.httpMethod === 'OPTIONS') {
        return Promise.resolve(processResponse(IS_CORS));
    }
    if (!event.body) {
        return Promise.resolve(processResponse(IS_CORS, 'no body arguments provided', 400));
    }
    const playerId = parseInt(event.pathParameters.id, 10);
    if (!playerId) {
        return Promise.resolve(processResponse(IS_CORS, 'invalid id specified', 400));
    }

    const player = JSON.parse(event.body);
    const playerKeys = Object.keys(player);
    if (!player || playerKeys.length < 1) {
        return Promise.resolve(processResponse(IS_CORS, 'no args provided', 400));
    } 

    const key = {};
    key[PRIMARY_KEY] = playerId;
    
    const firstProperty = playerKeys.splice(0,1);
    let params = {
        TableName: TABLE_NAME,
        Key: key,
        UpdateExpression: `set ${firstProperty} = :${firstProperty}`,
        ExpressionAttributeValues: {},
        ReturnValues: 'ALL_NEW'
    }
    params.ExpressionAttributeValues[`:${firstProperty}`] = player[firstProperty];

    playerKeys.forEach(property => {
        params.UpdateExpression += `, ${property} = :${property}`;
        params.ExpressionAttributeValues[`:${property}`] = player[property];
    });
    
    console.log("Updating player");
    dynamoDb.update(params)
    .promise()
    .then(function(updated)  {
        console.log("Update successful");
        callback(null, processResponse(IS_CORS, updated["Attributes"]["id"]));
        
    })
    .catch(dbError => {
        let errorResponse = `Error: Execution update, caused a Dynamodb error, please look at your logs.`;
        if (dbError.code === 'ValidationException') {
            if (dbError.message.includes('reserved keyword')) errorResponse = `Error: You're using AWS reserved keywords as attributes`;
        }
        console.log(dbError);
        return processResponse(IS_CORS, errorResponse, 500);
    });
    callback(null, processResponse(IS_CORS, "Success"));
};



function processResponse(isCors, body, statusCode) {
    const status = statusCode || (body ? 200 : 204);
    const headers = { 'Content-Type': 'application/json' };

    if (isCors) {
        Object.assign(headers, {
            'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'OPTIONS,PUT,POST',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Max-Age': '86400'
        });
    }
    return {
        statusCode: status,
        body: JSON.stringify(body) || '',
        headers: headers
    };
}