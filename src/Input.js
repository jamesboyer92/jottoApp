import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render() {
        const { success } = this.props;

        const content = success
            ? null
            : (
                <form className="form-inline">
                    <input
                        data-test="input-box"
                        className="mb-2 mx-sm-3"
                        type="text"
                        placeholder="enter guess..."
                    />
                    <button
                        type="submit"
                        data-test="submit-button"
                        className="btn btn-primary mb-2"
                    >
                        Submit
                    </button>
                </form>
            )

        return (
            <div data-test="component-input">
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
};

export default connect(mapStateToProps)(Input)