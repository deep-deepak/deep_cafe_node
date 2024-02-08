import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function BookTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {
        alert("submit form")
    }
    return (
        <div>
            <button className="btn table_btn" onClick={handleClickOpen}>
                Book a table</button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Book A Table
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />

                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                            />

                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Number of people"
                                variant="outlined"
                            />

                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                            />

                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} variant="contained">
                        Submit
                    </Button>
                    <Button autoFocus onClick={handleClose} variant="outlined">
                        close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}
