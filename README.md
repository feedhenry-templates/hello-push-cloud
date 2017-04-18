# FeedHenry Hello World MBaaS Server 
[![Dependency Status](https://img.shields.io/david/feedhenry-templates/hello-push-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/hello-push-cloud)
[![Build Status](https://travis-ci.org/feedhenry-templates/hello-push-cloud.png)](https://travis-ci.org/feedhenry-templates/hello-push-cloud)

This is a blank 'hello world' RHMAP MBaaS, demonstrating the UnifiedPush Server APIs.

# Group Hello World API

## hello [/push]

'Hello world' endpoint, that triggers a push notification requests against RHMAP.

# Build
```
npm install
```

# Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

To run:
* unit the tests:
```
npm run unit
```
* acceptance tests
```    
npm run serve
npm run accept
```
* coverage report for unit/acceptance tests:
```
npm run coverage-unit
npm run coverage-acceptance
```