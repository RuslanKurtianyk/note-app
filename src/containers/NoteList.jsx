import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    marginTop: 20,
  },
}))

const NoteList = ({ notes }) => {
  const classes = useStyles()

  return (
  <ul>
    {notes.map(note =>
      <Card
        className={classes.card}
        key={note.id}>
          <CardContent>
            <Typography gutterBottom>
              {note.text}
            </Typography>
          </CardContent>
      </Card>
    )}
  </ul>
)}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(
  mapStateToProps
)(NoteList)