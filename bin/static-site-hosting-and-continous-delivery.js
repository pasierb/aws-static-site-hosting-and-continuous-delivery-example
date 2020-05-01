#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { StaticSiteHostingAndContinousDeliveryStack } = require('../lib/static-site-hosting-and-continous-delivery-stack');

const app = new cdk.App();
new StaticSiteHostingAndContinousDeliveryStack(app, 'StaticSiteHostingAndContinousDeliveryStack');
