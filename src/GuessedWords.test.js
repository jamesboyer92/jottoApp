import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'dog', letterMatchCount: 0 }]
};

/**
 * Factory function to create a ShallowWrapper fro the GuessedWords component
 * @function
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessWords: [] });
    })
    test('component renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('component renders instructions to guess a word', () => {
        const component = findByTestAttr(wrapper, 'component-guess-instructions')
        expect(component.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 0 },
        { guessedWord: 'agile', letterMatchCount: 2 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];

    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    });

    test('component renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders guessed word section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('displays correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    });
});