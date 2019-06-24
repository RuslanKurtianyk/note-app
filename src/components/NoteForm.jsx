import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'

export const NoteForm = (props) => {
    const { handleSubmit, handleChange } = props

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="text" 
                variant="outlined"
                size="small"
                onChange={handleChange}
            />
            <Button variant="contained" size="small" type="submit">
                <SaveIcon />
                Save
            </Button>
        </form>
    )
}
