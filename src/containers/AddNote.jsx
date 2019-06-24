import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import { Formik } from 'formik'
import { NoteForm } from '../components/NoteForm'

const AddNote = ({ dispatch }) => {
  const onFormSubmit = ({text}) => {
    dispatch(addNote(text))
  }

  return (
    <div>
      <Formik
             render={props => <NoteForm {...props} />}
             onSubmit={onFormSubmit}
           />
    </div>
  )
}

export default connect()(AddNote)
