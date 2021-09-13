import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    render() {
        const questionId = this.props.match.params.id;
        console.log(questionId);
        return (
            <div>RESULTS</div>
        )
    }
}

function mapStateToProps({ questions, users }) {

}

export default connect(mapStateToProps)(Results);