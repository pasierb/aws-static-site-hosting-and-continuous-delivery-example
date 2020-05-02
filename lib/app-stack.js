const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const codebuild = require('@aws-cdk/aws-codebuild');

class AppStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const hostBucket = new s3.Bucket(this, 'static-site-hosting-and-cd-app');

    const deployBuild = new codebuild.Project(this, 'static-site-hosting-build', {
      buildSpec: codebuild.BuildSpec.fromSourceFilename('ci/buildspec.yml'),
      source: codebuild.Source.gitHub({
        owner: 'pasierb',
        repo: 'aws-static-site-hosting-and-continuous-delivery-example',
      }),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_3_0,
      },
      artifacts: codebuild.Artifacts.s3({
        bucket: hostBucket,
        packageZip: false,
        encryption: false,
        path: '/',
        name: ''
      })
    });
  }
}

module.exports = { AppStack }
