#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const lz = require('lz-string');

console.log('Starting Generating spec from Webhook');

const dataBody = process.env.INCOMING_HOOK_BODY;
const decompressedSpec = lz.decompressFromBase64(dataBody);

fs.writeFileSync(path.join(__dirname, '..', 'src', 'spec', 'swaggerUI.json'), decompressedSpec);

console.log('Swagger spec has generated successfully');
