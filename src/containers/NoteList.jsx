import React from 'react'
import { connect } from 'react-redux'
import { NoteItem } from '../components/NoteItem'
import { removeNote } from '../actions'

const NoteList = ({ dispatch, notes }) => {
  const onNoteRemove = (index) => {
    dispatch(removeNote(index))
  }
  
  return (
    <ul>
      {notes.map(note =>
        <NoteItem key={note.id} text={note.text} onRemove={onNoteRemove.bind(null, note.id)} />
      )}
    </ul>
  )
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(
  mapStateToProps
)(NoteList)