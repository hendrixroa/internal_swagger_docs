import React, { useEffect } from 'react'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';
import { withAuthenticator, Greetings, SignIn, RequireNewPassword, ForgotPassword } from 'aws-amplify-react';
import '../vendor.d.ts';
import swaggerData from '../spec/swaggerUI.json';
import config from "../config";

const Swagger = ({...props}) => {
  useEffect(() => {
    const ui = SwaggerUI({
      dom_id: '#swagger-custom-ui',
      spec: swaggerData,
      defaultModelsExpandDepth: -1,
      displayRequestDuration: true,
      syntaxHighlight: {
        activate: true,
        theme: 'monokai'
      },
      persistAuthorization: true,
      deepLinking: true,
      filter: '',
      docExpansion: 'none',
      showCommonExtensions: true,
    });
    ui.preauthorizeApiKey('api_key', config.api_key);
  }, []);

  return (
    <>
      <div id='swagger-custom-ui' {...props} />
    </>
  )
}

export default withAuthenticator(Swagger, true, [
    <Greetings />,
    <SignIn />,
    <RequireNewPassword/>,
    <ForgotPassword />,
  ],
);