import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let content;

    if (!props.guessWords.length) {
        content = <span data-test="component-guess-instructions">Try To Guess the word yo! </span>;
    }

    return (
        <div data-test="component-guessed-words" >
            {content}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GuessedWords;