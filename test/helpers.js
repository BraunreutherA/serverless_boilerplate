import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chai from 'chai';
import awsUtils from 'aws-lambda-test-utils';

global.stub = sinon.stub;
global.spy = sinon.stub;
global.expect = chai.expect;
global.createLambdaContext = awsUtils.mockContextCreator;
global.createS3Event = awsUtils.mockEventCreator.createS3Event;
global.createSNSEvent = awsUtils.mockEventCreator.createSNSEvent;
global.createDynamoDbEvent = awsUtils.mockEventCreator.createDynamoDBEvent;

chai.use(sinonChai);
