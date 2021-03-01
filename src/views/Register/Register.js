import { Dialog, DialogContent, Grid, TextField } from '@material-ui/core'
import React from 'react'

const fields = [{ name: 'registrationId', label: 'Registration ID' },
{ name: 'fullName', label: 'Full Name' },
{ name: 'registrationId', label: 'Registration ID' },
{ name: 'registrationId', label: 'Registration ID' },
]
const Register = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogContent>
                <Grid container spacing={3}>
                    {fields.map(field => {
                        return (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name={field.name}
                                    label={field.label}
                                />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </DialogContent>
        </Dialog >
    )
}

export default Register