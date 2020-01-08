import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let content;

    if (!props.guessedWords.length) {
        content = <span data-test="guess-instructions">Try To Guess the word yo! </span>;
    } else {

        const guessedWords = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        content = (
            <div data-test="guessed-words">
                <h3>GuessWords</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Guess
                            </th>
                            <th>
                                Matching Letters
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWords}
                    </tbody>
                </table>
            </div>
        )
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