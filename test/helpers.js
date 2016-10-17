import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chai from 'chai';

global.stub = sinon.stub;
global.spy = sinon.stub;
global.expect = chai.expect;

chai.use(sinonChai);
