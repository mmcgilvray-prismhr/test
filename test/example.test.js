// const chai = require('chai');
import chai from 'chai';
const expect = chai.expect;

import { main, someFunc4 } from '../index.js';

describe('Example test', () => {

  it('Should pass', () => {
    const pass = true;
    expect(pass).to.be.equal(true);
  })
  
  it('Should have property', () => {
    expect(someFunc4()).to.have.property('some', 'thing');
  })

  it('Should have property', () => {
    expect(main(true)).to.be.equal(0);
    expect(main(false)).to.be.equal(1);
  })
})