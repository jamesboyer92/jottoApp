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
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState);
        })
        test('renders input without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('renders the input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component.length).toBe(1)
        });
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component.length).toBe(1);
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

