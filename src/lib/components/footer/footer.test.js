import { shallow } from 'enzyme';
import React from 'react';
import Footer from './footer';

describe('<Footer />', () => {
  it('renders three <Footer /> components', () => {
    const wrapper = shallow(<Footer text="Fake test footer" />);
    expect(wrapper.find('span').text()).toBe('Fake test footer');
    expect(wrapper).toMatchSnapshot();
  });
});
