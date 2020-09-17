import classNames from '../../helpers/ClassNames';
import { expect } from 'chai';

describe('(Helper) ClassNames', () => {
  let passedVal;
  let expectedResult;

  beforeEach(() => {
    passedVal = {
      ['.Btn']: true,
      ['.Btn--disabled']: true
    };
    expectedResult = '.Btn .Btn--disabled';
  });

  it('Should be a function', () => {
    expect(classNames).to.be.an.instanceOf(Function);
  });

  it('Should return a stringified class list of all classes passed that evaluate to `true`', () => {
    expect(classNames(passedVal)).to.equal(expectedResult);
  });

  it('Should not return a class if its hashed value evaluates to `false`', () => {
    passedVal = {
      ['.Btn']: true,
      ['.Btn--disabled']: false
    };

    expect(classNames(passedVal)).to.equal('.Btn');
  });

  it('Should return an empty string if no arguments / empty object is passed', () => {
    expect(classNames()).to.equal('');
    expect(classNames({})).to.equal('');
  });
});
