import React from 'react'
import { connect } from 'react-redux'
import NoteItem from '../../components/NoteItem'
import { removeNote } from '../../actions'
import Container from '@material-ui/core/Container'

const NoteList = ({ dispatch, notes }) => {
  const onNoteRemove = (index) => {
    dispatch(removeNote(index))
  }
  
  return (
    <Container>
      {notes.map(note =>
        <NoteItem key={note.id} text={note.text} onRemove={onNoteRemove.bind(null, note.id)} />
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(
  mapStateToProps
)(NoteList)