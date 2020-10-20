import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import Swagger from './Swagger/Swagger';
import config from "./config";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

ReactDOM.render(<Swagger />, document.getElementById('root'));
