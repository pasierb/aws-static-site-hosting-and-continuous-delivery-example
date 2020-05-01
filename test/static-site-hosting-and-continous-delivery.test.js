const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const StaticSiteHostingAndContinousDelivery = require('../lib/static-site-hosting-and-continous-delivery-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new StaticSiteHostingAndContinousDelivery.StaticSiteHostingAndContinousDeliveryStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
