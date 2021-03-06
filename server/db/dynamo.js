const dynamo = require('dynamodb');

var dbendpoint = process.env.DYNAMO_URI;
var region = process.env.REGION;
dynamo.AWS.config.update({region: region, endpoint: dbendpoint});

module.exports = {dynamo};
