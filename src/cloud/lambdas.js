import 'aws-sdk/dist/aws-sdk';
const AWS = window.AWS;

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:547a9db4-7ba3-433c-ba1c-80a41f2d459c",
});

const LAMBDA = new AWS.Lambda({region: 'us-west-2'});

const FunctionName = 'dispatchGTRequest';

const GET_WIDGET_PARAMS = {
  FunctionName,
  Payload: JSON.stringify({
    "operation": "list",
  })
};

const GET_EVENT_PARAMS = {
  FunctionName,
  Payload: JSON.stringify({
    "operation": "events",
  })
};

let widgetData = null;
let eventData = null;

export const fetchData = function(callback) {
  LAMBDA.invoke(GET_WIDGET_PARAMS, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      widgetData = JSON.parse(data.Payload)
      callback(widgetData, err);
    }
  });
};

export const readData = function() {
  return widgetData;
};

export const fetchEventData = function(callback) {
  LAMBDA.invoke(GET_EVENT_PARAMS, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      eventData = JSON.parse(data.Payload)
      callback(eventData, err);
    }
  });
};

export const readEventData = function() {
  return eventData;
};

export const publishScore = function({personId, gameId}, callback) {
  const params = {
    FunctionName,
    Payload: JSON.stringify({
      "operation": "score",
      "payload": {"person_id": personId, "game_id": gameId}
    })
  };
  LAMBDA.invoke(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      data = JSON.parse(data.Payload)
      callback(data, err);
    }
  });
}
