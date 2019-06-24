import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as noteActions from '../../redux/actions/noteActions'
import SampleChildComponentWithState from '../../components/SampleChildComponentWithState'

class NoteTakingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: []
    };
  }

  componentDidMount () {
    // testing that all actions work as expected
    // const actions = this.props;
    // actions.noteActions.getNotes()
    // actions.noteActions.addNote({title: 'wat', body: 'yo', created_by: 'me'})
    // actions.noteActions.deleteNote(17)
    // // actions.noteActions.editNote(42, {title: 'edited', body: 'oh my', edited_by: 'julian' })
  }

  render () {
    return (
      <div>
        NoteTakingContainer component
        { < SampleChildComponentWithState { ...this.props } /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allNotes: state.get('allNotes'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    noteActions: bindActionCreators(noteActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTakingContainer);
