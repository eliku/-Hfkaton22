import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/dCandidate'


const DCandidetes = (props) => {
    // const [x, setX] = useState(0);
    // setX(5);
    useEffect(() => {
        props.fetchAllCandidates()
    }, []) // componentDidMount

    return (<div>from DCandidetes</div>)
}

const mapStateToProps = state => ({
    DCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllCandidates: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(DCandidetes);