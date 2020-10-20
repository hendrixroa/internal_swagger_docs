import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { withAuthenticator, Greetings, SignIn, RequireNewPassword, ForgotPassword } from 'aws-amplify-react';
import '../vendor.d.ts';
import swaggerData from '../spec/swaggerUI.json';
import config from "../config";

function complete(sys: any) {
  sys.preauthorizeApiKey('api_key', config.api_key);
}

const Swagger = () => <SwaggerUI spec={swaggerData} onComplete={complete}></SwaggerUI>

export default withAuthenticator(Swagger, true, [
    <Greetings />,
    <SignIn />,
    <RequireNewPassword/>,
    <ForgotPassword />,
  ],
);
