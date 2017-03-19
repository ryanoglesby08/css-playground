import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme';

import React from 'react';

import App from './App';

describe('hiding with CSS', () => {
    chai.use(chaiEnzyme());

    it('adds the hidden class name', () => {
      const app = shallow(<App />);
      expect(app.find('em')).not.to.have.className('is-hidden');

      app.find('input[type="button"]').simulate('click');
      expect(app.find('em')).to.have.className('is-hidden');
    });
});
