import React from 'react'
import AddNote from '../containers/AddNote'
import NoteList from '../containers/NoteList'
import Container from '@material-ui/core/Container'

const App = () => (
  <Container>
    <AddNote />
    <NoteList />
  </Container>
)

export default App