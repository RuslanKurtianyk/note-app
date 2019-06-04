import React from 'react'
import { connect } from 'react-redux'

const NoteList = ({ notes }) => (
  <ul>
    {notes.map(note =>
      <div
        key={note.id}>
        {note.text}
      </div>
    )}
  </ul>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(
  mapStateToProps
)(NoteList)