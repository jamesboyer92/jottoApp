import React from 'react';
import PropTypes from 'prop-types'


/**
 * Functional react component for congratulatory message.
 * @param { object } props - React props. 
 * @function
 * @returns {JSX.Element} - Rendered component ( or null if `success` props is )
 */

const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="component-message">Congrats! You guessed the word!</span>
            </div>
        )
    } else {
        return <div data-test="component-congrats" />
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;