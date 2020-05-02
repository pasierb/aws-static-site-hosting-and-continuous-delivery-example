#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { AppStack } = require('../lib/app-stack');

const app = new cdk.App();

new AppStack(app, 'AppStack');
