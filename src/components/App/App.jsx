import React from 'react'
import AddNote from '../../containers/AddNote'
import NoteList from '../../containers/NoteList'
import Container from '@material-ui/core/Container'
import './App.css'

const App = () => (
  <Container >
    <AddNote />
    <NoteList />
    <div className='tear-image'></div>
  </Container>
)

export default App