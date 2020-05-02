# Static site hosting and continuous delivery example

## Infrastructure

- __GitHub__ to host source code
- __AWS S3__ to host static files
- __AWS Cloudfront__ as CDN
- __AWS Codebuild__ for continuous delivery pipeline

### Github authentication

__!!!WARNING!!!__ this is a global setting per account.

```bash
aws codebuild import-source-credentials --server-type GITHUB --auth-type PERSONAL_ACCESS_TOKEN --token <token_value>
```
