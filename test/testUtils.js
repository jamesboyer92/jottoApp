import CheckPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';


/**
 * Create a testing store with imported reducers, middleware, and initialState,
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store} - Redux Store.
 * 
 */

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};

/**
 * 
 * @param { ShallowWrapper } wrapper - Enzyme shallow wrapper.
 * @param { string } val - Value of data-test attribute for search.
 * @returns { ShallowWrapper }
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Checks Supplied Props from component and 
 * @param { object } component - component we're testing the props of
 * @param { object } conformingProps - expected props
 * @returns { testResult }
 */
export const checkProps = (component, conformingProps) => {
    const propError = CheckPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}