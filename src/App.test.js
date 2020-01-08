import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


/**
 * Factory function ot create a ShallowWrapper for the App Component
 * @function setup
 * @param { object } props - Component Props specific to this setup
 * @param { any } state - Initial state for setup.
 * @returns { ShallowWrapper }
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  //if we find state in the shallow copy of the component, set it to the wrapper to be passed down for testing
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
 * @param { ShallowWrapper } wrapper 
 * @param { string } val
 * @returns { ShallowWrapper } 
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='component-${val}']`);
}

test('renders App.js', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app')
  expect(appComponent.length).toBe(1);
});
