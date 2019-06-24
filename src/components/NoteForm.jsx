import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
      height: 54,
      marginLeft: 20,
    },
  }));
export const NoteForm = (props) => {
    const { handleSubmit, handleChange } = props
    const classes = useStyles()

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <TextField
                    name="text" 
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                />
                <Button 
                className={classes.button}
                variant="contained" 
                size="large" 
                type="submit">
                    <SaveIcon />
                    Save
                </Button>
            </Container>
        </form>
    )
}
