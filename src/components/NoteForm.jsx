import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        height: "auto",
        marginLeft: 20,
    },
  }))

export const NoteForm = (props) => {
    const { handleSubmit, handleChange } = props
    const classes = useStyles()

    return (
        <form onSubmit={handleSubmit}>
            <Container className={classes.container}>
                <TextField
                    name="text" 
                    variant="outlined"
                    margin="dense"
                    onChange={handleChange}
                />
                <Box>
                    <Button 
                        className={classes.button}
                        variant="contained"
                        size="large"
                        type="submit">
                            <SaveIcon />
                            Save
                    </Button>
                </Box>
            </Container>
        </form>
    )
}
