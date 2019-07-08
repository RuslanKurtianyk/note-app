import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions'
import { Formik } from 'formik'
import NoteForm from '../../components/NoteForm'

const AddNote = ({ dispatch }) => {
  const onFormSubmit = ({ text }) => {
    if (text !== undefined && text !== '') {
      dispatch(addNote(text))
    }
  }

  return (
      <Formik
        render={props => <NoteForm {...props} />}
        onSubmit={onFormSubmit}
      />
  )
}

export default connect()(AddNote)
