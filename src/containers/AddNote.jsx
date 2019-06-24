import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import { Formik } from 'formik'
import { NoteForm } from '../components/NoteForm'
import Container from '@material-ui/core/Container'

const AddNote = ({ dispatch }) => {
  const onFormSubmit = ({text}) => {
    dispatch(addNote(text))
  }

  return (
    <Container>
      <Formik
             render={props => <NoteForm {...props} />}
             onSubmit={onFormSubmit}
           />
    </Container>
  )
}

export default connect()(AddNote)
