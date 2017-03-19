import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme';

import React from 'react';

import App from './App';

describe('hiding with JS', () => {
    chai.use(chaiEnzyme());

    it('removes the element', () => {
      const app = shallow(<App />);
      expect(app.find('em')).to.be.present();

      app.find('input[type="button"]').simulate('click');
      expect(app.find('em')).to.not.be.present();
    });
});
