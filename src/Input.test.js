import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input'

/**
 * Factor function to create a SHallowWrapper for the Input Component
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 */


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders input without error', () => {

        });
        test('renders the input box', () => {

        });
        test('renders submit button', () => {

        });
    });

    describe('word has been guessed', () => {
        test('renders without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submitButton', () => {

        });
    });
});

describe('updates state', () => {

});

