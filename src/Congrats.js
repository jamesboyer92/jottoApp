import React from 'react';


/**
 * Functional react component for congratulatory message.
 * @param { object } props - React props. 
 * @function
 * @returns {JSX.Element} - Rendered component ( or null if `success` props is )
 */

export default (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="component-message">YEEEEEEAHHHHHHHHHH! Great Job!</span>
            </div>
        )
    } else {
        return <div data-test="component-congrats" />
    }
}