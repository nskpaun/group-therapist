import 'aws-sdk/dist/aws-sdk';
const AWS = window.AWS;

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:547a9db4-7ba3-433c-ba1c-80a41f2d459c",
});

const LAMBDA = new AWS.Lambda({region: 'us-west-2'});

const GET_PARAMS = {
  FunctionName: 'dispatchGTRequest',
  Payload: JSON.stringify({
    "operation": "list",
    "payload": {"TableName": "HappyHour"}
  })
};

let data = null;

export const fetchData = function(callback) {
  LAMBDA.invoke(GET_PARAMS, function(err, data) {
    if (err) {
      callback(data, err);
    }
    else {
      data = JSON.parse(data.Payload)
      callback(data);
    }
  });
};

export const readData = function() {
  return data;
};
